import Product from '../models/product.model.js'
export default {

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