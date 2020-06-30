import express from 'express'
import init from './mongoinit.js'
//import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Product from "./models/product.model.js"
import cors from 'cors'

//allows you to use import and export by using esm modules
//require = require("esm")(module);

connectMongoose()
init() //Jos DB on tyhjä

async function connectMongoose() { 
    await mongoose.connect(
        "mongodb://localhost/cafeDB",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

//Express
const app = express()
app.use(cors())
const port = 4000
//app.use(bodyParser.json)

app.post('/api/product/:productName/:price', (req, res) => {
    let price = parseInt(req.params.price)
   
    // todo: img (product.model, middleware?)
    const product = {
        name: req.params.productName,     
        price: price
    }

    const productData = new Product(product)
    productData.save()
    res.send(`Product ${req.params.productName} added.\n`)
})

app.get('/api/products', async (req, res) => {
    const products = await Product.find({})

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

app.listen(port, () => console.log(`Backend API listening on port ${port}!`));
