import Info from '../models/info.model.js'

export default {
    newinfo: async (req, res) => {
    let info = await Info.find({})
        
        if (info) {
        res.send(`
        <form method="POST" enctype="multipart/form-data" action="/api/info/edit">
            <input type="text" name="address" placeholder="Address" value="${info[0].address}" required autofocus/>
            <br/><input type="text" name="city" placeholder="City" value="${info[0].city}" required />
            <br/><input type="text" name="phone" placeholder="Phone" value="${info[0].phone}" required/>
            <br/><input type="text" name="email" placeholder="Email" value="${info[0].email}" required/>
            <input type="hidden" name="id" value="${info[0]._id}"/>
            <br/><input type="Submit" value="Save" />
        </form>
        `)
    }
    else {
        res.send("Kissa")
    }
               },
    editinfo: async (req, res) => {
        const info = await Info.findOne({})

        await info.updateOne(
            {$set: {
               address: req.body.address,
               city: req.body.city,
               phone: req.body.phone,
               email: req.body.email 
            }})
            await info.save()
        res.send("Kurwo")
    },
    get: async (req, res) => {
    const data = await Info.find()

    if (data) {
        res.send(JSON.stringify(data))
    }
    else {
    console.log(`Kissa \n`)
    res.send(`Kissa \n`)
    }}


}