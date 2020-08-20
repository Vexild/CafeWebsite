import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import init from './mongoinit.js'
import Product from "./models/product.model.js"
import infoRouter from './routers/info.router.js'
import productsRouter from './routers/product.router.js'
import cateringRouter from './routers/catering.router.js'
import businessHoursRouter from './routers/businessHours.router.js'
import tagsRouter from './routers/tags.router.js'
import spillageRouter from './routers/spillage.router.js'
import aboutUsRouter from './routers/aboutUs.router.js'
import dailyDealsRouter from './routers/dailyDeals.router.js'
import adminRouter from './routers/admin.router.js'

const port = 4000

function mongoLocal() {
init() //If DB is empty, add dummydata
//Requires mongodb to be running locally
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
mongoose.set('useFindAndModify', false);

const upload = multer()

const corsOptions = {
        origin: ['http://localhost:3001', 'http://localhost:3000'],
        credentials: true
    }


//Express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.post('/api/edit', upload.fields([]), async (req, res) => {
    console.log(req.body)

    let product = await Product.findOne({_id : mongoose.Types.ObjectId(req.body.id)})
    if (product) {
        await product.updateOne(
            {$set: {
                name: req.body.name,
                tags: req.body.tags,
                price: req.body.price,
                productId: req.body.productId    
            }
            }
        )
        await product.save()
        res.send("Updated")
    }
    else {
        res.send("Kissa")
    }
})

app.get('/api/products/get/:tag', async (req, res) => {

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

app.get('/api/test', (req, res) => {
    console.log(`It works!\n`)
    res.send(`It works!\n`)
})
app.use(productsRouter)
app.use(cateringRouter)
app.use(infoRouter)
app.use(businessHoursRouter)
app.use(tagsRouter)
app.use(spillageRouter)
app.use(aboutUsRouter)
app.use(dailyDealsRouter)
app.use(adminRouter)

app.listen(port, () => console.log(`Backend API listening on port ${port}!`));
