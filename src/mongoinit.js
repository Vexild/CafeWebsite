import Product from "./models/product.model.js"

export default async function init() {
    const db = await Product.findOne({name: "taikahaltiakakku"})

    console.log("init")

    if (!db) {
    console.log("db doesn't exist")
       
        const dummyProduct = new Product()
        dummyProduct.name = "taikahaltiakakku",
        dummyProduct.price = 20
        dummyProduct.tags = ["maaginen", "makea"]
        dummyProduct.id = 12345
        dummyProduct.save()

        const dummyProduct2 = new Product()
        dummyProduct2.name = "kahvi",
        dummyProduct2.price = 5,
        dummyProduct2.tags = ["kahvi"]
        dummyProduct2.id = 1 
        dummyProduct2.save()
        
        const dummyProduct3 = new Product()
        dummyProduct3.name = "pulla",
        dummyProduct3.price = 3,
        dummyProduct3.tags = ["pulla"]
        dummyProduct3.id = 1212521534
        dummyProduct3.save()

        const dummyProduct4 = new Product()
        dummyProduct4.name = "pullakahvi",
        dummyProduct4.price = 7,
        dummyProduct4.tags = ["pulla", "kahvi"]
        dummyProduct4.id = 124685
        dummyProduct4.save()

        const dummyProduct5 = new Product()
        dummyProduct5.name = "kissa",
        dummyProduct5.price = 9001,
        dummyProduct5.tags = ["vitunpitkätagikebabkissa", "your-tag-here", "vihainen", "raapiva", "kissa"]
        dummyProduct5.id = 123461251
        dummyProduct5.save()

        const dummyProduct6 = new Product()
        dummyProduct6.name = "salmiakkisuklaa",
        dummyProduct6.price = 90,
        dummyProduct6.tags = ["suolainen", "makea"]
        dummyProduct6.id = 12161251
        dummyProduct6.save()
        
        console.log("Dummydb created")
    }
    else {
        console.log("db exists")
    }
}