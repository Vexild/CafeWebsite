export default {

get: async (req, res) => {
    console.log("Mongo start")
    res.send("Kissa")
    const products = await Product.find({})
    console.log("Mongo end")

    if (products) {

        res.send(JSON.stringify(products))
    }
    else {
        res.send("EIOO")
    }
}

}