import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import init from './mongoinit.js'
import Product from "./models/product.model.js"

const port = 4000



function mongoLocal() {
init() //Jos DB on tyhjä
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
//app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/product/:productName/:price/:id', (req, res) => {
    let price = parseInt(req.params.price)
    let id = parseInt(req.params.id)
   
    // todo: img (product.model, middleware?)
    const product = {
        name: req.params.productName,     
        price: price,
        id: id
    }

    const productData = new Product(product)
    productData.save()
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
