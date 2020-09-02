import React, {useState} from 'react'
import axios from 'axios'
import apiUrl from '../api'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
        axios.post(apiUrl + "/api/restrictedzone/login", {
            password: password
        })
        .then(response => {
            userLogin(true)
            localStorage.setItem("user", "true")
            response.status == 200 ? setLoginSuccess(true) : setLoginSuccess(false)
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
        axios.get(apiUrl + "/api/restrictedzone/test")
        .then(response => console.log(response), setError(""))
        .catch(err => {
            setError("Auth failed.", err)
        })
    }
    

    return(
        <Container className="login-main">
            <Col className="login-center login-font">
            <h2>Cafe Katastrof</h2>
            <label for="Password">Password</label><br/>
            <input type="password" onChange={e => setPassword(e.target.value)} name="password" /><br/>
            <input type="button" value="login" onClick={() => handleSubmit()}/>
            <input type="button" value="check" onClick={() => checkToken()}/>
            <br/>{error ? error : ""}
            <br/>{loginSuccess ? <p>Login Success!</p> : ""}
            </Col>
            <Col>
                <p className="login-flavor-area">{`"Beware that, when fighting monsters, you yourself do not become a monster... 
                
                for when you gaze long into the abyss. The abyss gazes also into you.”

                    ― Friedrich W. Nietzsche`}
                </p>
            </Col>
        </Container>
    )
}