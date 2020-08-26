import React, {useState} from 'react'
import axios from 'axios'
import apiUrl from '../api'

export default function LogIn() {
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    //axios.defaults.withCredentials = true
    axios.create({
        withCredentials: true
    })

    
    const handleSubmit = () => {
        console.log("click", password)

        if (error) {
            setError()
        }

        axios.post(apiUrl + "/api/restrictedzone/login", {
            password: password
        })
        .catch(err => {
            console.log(err)
            setError("Authentication failed.")
        })
    }

    const checkToken = () => {
        if (error) {
            setError()
        }
        axios.get(apiUrl + "/api/restrictedzone/test")
        .then(response => console.log(response), setError(""))
        .catch(err => {
            setError("Auth failed.")
        })
    }
    

    return(
        <div>
            <label for="Password">Password</label><br/>
            <input type="text" onChange={e => setPassword(e.target.value)} name="password" /><br/>
            <input type="button" value="login" onClick={() => handleSubmit()}/>
            <input type="button" value="check" onClick={() => checkToken()}/>
            <br/>{error ? error : ""}
        </div>
    )
}