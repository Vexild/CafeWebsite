import React, {useState} from 'react'
import axios from 'axios'

export default function LogIn({userLogin}) {
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [loginSuccess, setLoginSuccess] = useState(false)

    //axios.defaults.withCredentials = true
    axios.create({
        withCredentials: true
    })
    
    const handleSubmit = () => {
        console.log("click", password)

        if (error) {
            setError()
        }

        axios.post('http://localhost:4000/api/restrictedzone/login', {
            password: password
        })
        .then(response => {
            userLogin(true)
            response.status == 200 ? setLoginSuccess(true) : setLoginSuccess(false)
            localStorage.setItem("user", "true")
        })
        .catch(err => {
            console.log(err)
            localStorage.clear()
            setError("Authentication failed.")
        })
    }

    const checkToken = () => {
        if (error) {
            setError()
        }
        axios.get('http://localhost:4000/api/restrictedzone/test')
        .then(response => console.log(response), setError(""))
        .catch(err => {
            setError("Auth failed.", err)
        })
    }
    

    return(
        <div>
            <label for="Password">Password</label><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} name="password" /><br/>
            <input type="button" value="login" onClick={() => handleSubmit()}/>
            <input type="button" value="check" onClick={() => checkToken()}/>
            <br/>{error ? error : ""}
            <br/>{loginSuccess ? <p>Login Success!</p> : ""}
        </div>
    )
}