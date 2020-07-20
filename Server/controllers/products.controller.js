import Product from '../models/product.model.js'
import mongoose from 'mongoose'

export default {
editproduct: async (req, res) => {
    console.log(req.params)
   const product = await Product.findOne({_id: mongoose.Types.ObjectId(req.params.id)})
   if (product) {
    res.send(`
        <form action="/api/products/edit" method="POST" enctype="multipart/form-data">
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
    )
   }
   else {
       res.send(`Product ${req.params.id} not found.`)
   }
},
edit: async (req, res) => {
    console.log(req.body)
    const product = await Product.findOne({_id: req.body.id})

    await product.updateOne(
        {$set: {
            name: req.body.name,
            tags: req.body.tags,
            price: req.body.price,
            productId: req.body.productId
        }}
    )
    await product.save()
    res.send("Updated")
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