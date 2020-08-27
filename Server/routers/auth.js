import jwt from 'jsonwebtoken'

 const auth = async (req, res) => {
     console.log("Auth")
     if (!req.header('cookie')) {
         console.log("No cookie")
            res.sendStatus(403)
        }
        else {
            console.log("Cookie: ", req.header('cookie'))
        const token = req.header('cookie').split('=')[1]
        const authorizedData = "asd"
        const tempSecret = "asdfghj"


        jwt.verify(token, tempSecret, (err) => {
            if (err) {
                console.log(err)
                res.sendStatus(403)
            }
        })
    }
}

export default auth