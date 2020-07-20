import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import init from './mongoinit.js'
import Product from "./models/product.model.js"

import infoRouter from './routers/info.router.js'
import productsRouter from './routers/product.router.js'

const port = 4000

function mongoLocal() {
init() //If DB is empty, add dummydata
//Requires mongodb to be running locally
async function connectMongoose() { 
    await mongoose.connect(
        "mongodb://localhost/cafeDB",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}
connectMongoose()
}

function mongoAtlas() {
const mongoString = `mongodb+srv://kissa:fkGQklUbCBxtOkJY@cluster0.avk0y.mongodb.net/cafeDB?retryWrites=true&w=majority`

//Mongodb atlas
async function connectMongoose() {
    console.log("Mongo")
await mongoose.connect(mongoString,
                { useNewUrlParser: true, useUnifiedTopology: true }
    );
}
connectMongoose()
}

//Use either mongoLocal or mongoAtlas, not both
//mongoLocal()
mongoAtlas()

const upload = multer()

//Express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/addproduct', (req, res) => {
    res.send(`
        <form>
            <input type="text" id="name" placeholder="Product name" required autofocus/>
            </br>
            <input type="text" id="price" placeholder="Price" required />
            </br>
            <input type="text" id="id" placeholder="Product ID" required/>
            </br>
            <button>Add</button>
        </form>
        ` 
    )
})

app.get('/api/editproduct/:id', upload.fields([]), async (req, res) => {
   const product = await Product.findOne({_id: req.params.id})
   if (product) {
    res.send(`
        <form action="/api/edit" method="POST" enctype="multipart/form-data">
        <label>Product name </label> <br>
            <input type="text" id="name" name="name" placeholder="name" value="${product.name}" required autofocus/>
            <br>
            <label>Product tags (kissa, koira, kebab..)</label> <br>
            <input type="text" id="tags" name="tags" palceholder="tags" value=${product.tags} required />
            <br>
            <label>Price</label> <br>
            <input type="text" id="price" name="price" placeholder="Price" value="${product.price}"required />
            <br>
            <label>Product ID </label> <br>
            <input type="text" id="productId" name="productId" placeholder="Product ID" value="${product.id}" required/>
            <input type="hidden" name="id" value="${product._id}" required/>
            <br>
            <input type="submit" value="Save">
        </form>
        ` 
        //redirect to edit/:name/:price etc?
    )
   }
   else {
       res.send(`Product ${req.params.id} not found.`)
   }
})

app.post('/api/edit', upload.fields([]), (req, res) => {
    console.log(req.body)

    console.log(req.body.id, typeof(req.body.id))
    let target = mongoose.Types.ObjectId(`${req.body.id}`)
    console.log(target, typeof(target))
    
    try {
   Product.updateOne(
       { _id : mongoose.Types.ObjectId(req.body.id)},
       {$set: {
            name: req.body.name,
            tags: req.body.tags,
            price: parseInt(req.body.price),
            id: parseInt(req.body.productId) } },
        {upsert : true}
        )
    }
    catch (e) {
        res.send(e)
    }
    res.send("Koira")
})
/*
,
           function (err, result) {
               if (err) {
                   res.send(err)
               }
               else {
                   res.send(result)
           }
           */

app.post('/api/product/:productName/:price/:id', (req, res) => {
    let price = parseInt(req.params.price)
    let id = parseInt(req.params.id)
    // todo: img (product.model, middleware?)
    const productData = {
        name: req.params.productName,     
        price: price,
        id: id
    }
    response.end('Hello World')
    const product= new Product(productData)
    product.save()
    res.send(`Product ${req.params.productName} added.\n`)
})

app.get('/api/products/get/:tag', async (req, res) => {

    const query = req.params.query

    //100% matchi, case-sensitive
    const products = await Product.find({tags: query})

    if (products) {
        res.send(`${products}\n`)
    }
    else {
        res.send("EIOO")
    }
})



app.get('/api/test', (req, res) => {
    console.log(`Kissa \n`)
    res.send(`Kissa \n`)
})
app.use(productsRouter)
app.use(infoRouter)

app.listen(port, () => console.log(`Backend API listening on port ${port}!`));
