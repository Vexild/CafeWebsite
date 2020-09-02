import jwt from 'jsonwebtoken'

 const auth = async (req, res, next) => {
     console.log("Auth")
     if (!req.header('cookie')) {
         console.log("No cookie")
            res.sendStatus(401)
        }
        else {
            //console.log("Cookie: ", req.header('cookie'))
        const token = req.header('cookie').split('=')[1]

        jwt.verify(token, process.env.SECRET, (err) => {
            if (err) {
                console.log(err)
                res.sendStatus(403)
            }
		else {
			console.log("Valid token")
			next()
		}
        })
    }
}

export default auth
