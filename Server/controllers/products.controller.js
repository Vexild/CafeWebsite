import Product from '../models/product.model.js'
import mongoose from 'mongoose'

export default {
post: async (req, res) => {
    console.log(req.body, typeof(req.body))
    const product = new Product()
    product.name = req.body.name
    product.price = parseFloat(req.body.price)
    product.id = req.body.id
    product.tags = req.body.tags
    product.description = req.body.description
    product.productInfo = req.body.productInfo
    
    await product.save()
    res.send("Product added")
    
},
put: async (req, res) => {
    await Product.findOneAndUpdate({_id : req.body._id}, 
        {$set: {
            name: req.body.name,
            price: parseFloat(req.body.price),
            id: req.body.id,
            tags: req.body.tags,
            description: req.body.description,
            productInfo: req.body.productInfo
        }})
        .then(res.send("Updated"))
        //.catch(e => console.log(e))
},
delete: async (req, res) => {
    Product.deleteOne({_id: req.body._id})
    .catch(e => console.log(e))
    res.send("KURWO")
},
get: async (req, res) => {
    const products = await Product.find({})

    if (products) {
        res.send(JSON.stringify(products))
    }
    else {
        res.send("EIOO")
    }
}

}