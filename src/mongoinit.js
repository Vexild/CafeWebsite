import Product from "./models/product.model.js"

export default async function init() {
    const db = await Product.findOne({name: "taikahaltiakakku"})

    console.log("init")

    if (!db) {
    console.log("db doesn't exist")
        
        const dummyProduct = new Product() 
        dummyProduct.name = "taikahaltiakakku",
        dummyProduct.price = 9001
        dummyProduct.tags = "maaginen"
        dummyProduct.id = 12345
        dummyProduct.save()
        const dummy2 = new Product()
        dummy2.id = 12354
        dummy2.name = "kahvi"
        dummy2.price = 124
        dummy2.tags = "kahvi"
        dummy2.save()

        console.log("Dummydb created")
    }
    else {
        console.log("db exists")
    }
}