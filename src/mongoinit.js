import Product from "./models/product.model.js"

export default async function init() {
    const db = await Product.findOne({name: "salmiakkisuklaakissa"})

    console.log("init")

    if (!db) {
    console.log("db doesn't exist")
        
        const dummyProduct = new Product() 
        dummyProduct.name = "origamisuklaakoira",
        dummyProduct.price = 9001
        dummyProduct.tags = "vegaani", "makea"
        dummyProduct.id = 12345
        dummyProduct.save()
        const dummy2 = new Product()
        dummy2.id = 12354
        dummy2.name = "salmiakkisuklaakissa",
        dummy2.price = 9001
        dummy2.tags = "makea", "suolainen"
        dummy2.save()

        console.log("Dummydb created")
    }
    else {
        console.log("db exists")
    }
}