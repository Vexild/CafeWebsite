import jwt from 'jsonwebtoken'

 const auth = async (req, res) => {
     if (!req.header('cookie')) {
            res.redirect('/login')
        }
        const token = req.header('cookie').split('=')[1]
        
        const authorizedData = "asd"
        const tempSecret = "asdfghj"


        jwt.verify(token, tempSecret, (err) => {
            if (err) {
                console.log(err)
                //res.sendStatus(403)
                res.redirect('/login')
            }
        })
    }

export default auth