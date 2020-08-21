import Admin from '../models/admin.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const saltRounds = 14 //bcrypt work factor, use higher value as computers get faster
// saltRounds = 17 => changePwd - 7.76s - login 8.05s (insomnia, 8700k@4.7)


export default {
    get: async (req, res) => {

    },
    put: async (req, res) => {
    },
    changePwd: async (req,res) => {
        console.log(req.body.password)

        if (req.body.password) {
        await bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                throw (err)
            }
            else {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) {
                        throw err
                    }
                    else {
            Admin.updateOne({},
                {
                    password : hash
            })
            .catch(err => res.send(err))
            .then(response => res.send(response))
        }
    })
}
})
        }
        else {
            res.send("Cannot set empty password.")
        }
    },
    logIn: async (req, res) => { 
        
        //move to .env
        const tempSecret = "asdfghj"
        
        const admin = await Admin.findOne({})

        const isMatch = await bcrypt.compare(req.body.password, admin.password)

        if (isMatch) {
            console.log("Success")
            const token = jwt.sign({asd: "asd"}, tempSecret, {
                expiresIn: '1h',
            })
            res.cookie('token', token, {
                httpOnly: true
            })
            res.send(token)
        }
        else {
            res.send(403)
        }
    },
    testToken: async (req, res) => {
        console.log(req.headers.authorization)
        //console.log(req.data)

        const authorizedData = "asd"
        const tempSecret = "asdfghj"

        jwt.verify(req.token, tempSecret, (err, authorizedData) => {
            if (err) {
                console.log(err)
                res.send(403)
            }
            else {
                res.send("Success", authorizedData)
            }
        })
    }
}