import nodemailer from 'nodemailer'

export default {
    post: async (req, res) => {

        if (req.body.to && req.body.text && req.body.subject) {
            console.log("OK")

            let transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD
                }
            })
            
/*
            transporter.verify(function(error, success) {
            if (error) {
                console.log("kissa")
              res.send(error);
            } else {
              res.send(success)
            }
          });
          */
            await transporter.sendMail({
                to: req.body.to,
                subject: req.body.subject,
                text: req.body.text
            })
            .then(response => res.send(response))
            .catch(err => res.send(err))
        }
        else {
            res.send("KURWO")
        }
    }
}