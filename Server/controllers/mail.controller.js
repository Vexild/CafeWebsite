import nodemailer from 'nodemailer'

export default {
    post: async (req, res) => {
        
        

        if (req.body.to && req.body.from && req.body.message && req.body.subject) {
            console.log("OK")

            let transporter = nodemailer.createTransport({
                host: "smtp-118.luukku.com",
                port: 587,
                secure: true,
                auth: {
                    user: "cafesample@luukku.com",
                    pass: "vitunkissakebab"
                }
            })

            transporter.verify(function(error, success) {
            if (error) {
                console.log("kissa")
              res.send(error);
            } else {
              res.send("Server is ready to take our messages");
            }
          });
/*
            await transporter.sendMail({
                to: req.body.to,
                from: req.body.from,
                subject: req.body.subject,
                text: req.body.message
            })
            .then(response => res.send(response))
            .catch(err => res.send(err))
            */
        }
        else {
            res.send("KURWO")
        }
    }
}