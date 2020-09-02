import Admin from './models/admin.model.js'
import bcrypt from 'bcryptjs'

export default async function init() {
    const admin = await Admin.findOne({})

    console.log("init")

    if (!admin.password | admin.password.length === 0) {
    console.log("Admin password blank. Running init.")

    const saltRounds = 14
    const defaultPwd = "pitkätestikissakebab"
    
    await bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                throw (err)
            }
            else {
                bcrypt.hash(defaultPwd, salt, (err, hash) => {
                    if (err) {
                        throw err
                    }
                    else {
            Admin.updateOne({},
                {
                    password : hash
            })
            .catch(err => console.log(err))
            .then(console.log("Admin password reset. Read mongoinit.js."))
        }
    })
}
})

    }
    

}