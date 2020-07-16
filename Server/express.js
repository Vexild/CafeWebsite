import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import init from './mongoinit.js'
import Product from "./models/product.model.js"

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

app.get('/api/editproduct/:id', async (req, res) => {
   console.log(req.params.id) 
   const product = await Product.findOne({id: req.params.id})
   if (product) {

    res.send(`
        <form method="POST" action="/api/edit">
        <label>Product name </label> <br>
            <input type="text" id="name" placeholder="name" value="${product.name}" required autofocus/>
            <br>
            <label>Product tags (kissa, koira, kebab..)</label> <br>
            <input type="text" id="tags" palceholder="tags" value=${product.tags} required />
            <br>
            <label>Price</label> <br>
            <input type="text" id="price" placeholder="Price" value="${product.price}"required />
            <br>
            <label>Product ID </label> <br>
            <input type="text" id="id" placeholder="Product ID" value="${product.id}" required/>
            <br>
            <button>Save</button>
        </form>
        ` 
        //redirect to edit/:name/:price etc?
    )
   }
   else {
       res.send(`Product ${req.params.id} not found.`)
   }
})

app.post('/api/edit', (req, res) => {
    console.log(req.body)
    let targetId = parseInt(req.body.id)
    console.log(targetId)
    
   //TODO?: Use mongo id instead of product id?
   Product.replaceOne(
       { id: targetId},
       {
           name : req.params.name,
           tags: req.params.tags,
           price: req.params.price,
           id: targetId},
           function (err, result) {
               if (err) {
                   res.send(err)
               }
               else {
                   res.send(result)
           }
        }
        )
})

app.post('/api/product/:productName/:price/:id', (req, res) => {
    let price = parseInt(req.params.price)
    let id = parseInt(req.params.id)
    // todo: img (product.model, middleware?)
    const productData = {
        name: req.params.productName,     
        price: price,
        id: id
    }

    const product= new Product(productData)
    product.save()
    res.send(`Product ${req.params.productName} added.\n`)
})

app.get('/api/products/:query', async (req, res) => {

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

app.get('/api/products', async (req, res) => {
    const products = await Product.find({})

    if (products) {

        res.send(products)
    }
    else {
        res.send("EIOO")
    }
})

app.get('/api/test', (req, res) => {
    console.log(`Kissa \n`)
    res.send(`Kissa \n`)
})

app.listen(port, () => console.log(`Backend API listening on port ${port}!`));
