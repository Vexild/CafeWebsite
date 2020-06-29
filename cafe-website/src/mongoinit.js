import Product from "./models/product.model.js"

export default async function init() {
    const db = await Product.findOne({name: "test"})

    console.log("init")

    if (!db) {
    console.log("db doesn't exist")
        
        const dummyProduct = new Product() 
        dummyProduct.name = "test",
        dummyProduct.price = 9001
        dummyProduct.save()
        console.log("Dummydb created")
    }
    else {
        console.log("db exists")
    }
}