import React, { useState } from 'react';
import axios from 'axios'
    
const ContactInformation = () => {
    const [info, setInfo] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [city, setCity] = useState()
    const [email, setEmail] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()

       axios.post(apiUrl + "/api/info/edit",{
           address: address ? address : info[0].address,
           phone: phone ? phone : info[0].phone,
           city: city ? city : info[0].city,
           email: email ? email : info[0].email
       } 
       )
       .then(response => {
           console.log(response)
       })
       .catch(error => console.log(error))
    }

    const getInfo = () => {
        return axios.get(apiUrl + "/api/info/get")
            .then(response => {
                let parsedBSON
                parsedBSON = JSON.parse(JSON.stringify(response.data))
                setInfo(parsedBSON)
                return parsedBSON
            })
            .catch(error => console.log(error) )
        }
  
    if (!info) {
        getInfo()
            return (
        <div>        
            <h3>Contact information loading..</h3>
        </div>
        )
    }
    else {
    return (
        <div>        
            <h3>Edit contact information</h3>
            <form onSubmit={ handleSubmit}>
               <input onChange={e => setAddress(e.target.value)} placeholder="Address" type="text" defaultValue={info[0].address} name="address" autoFocus required/>
               <br/><input onChange={e => setCity(e.target.value)} placeholder="City" type="text" defaultValue={info[0].city} name="city" required/>
               <br/><input onChange={e => setPhone(e.target.value)} placeholder="Phone" type="text" defaultValue={info[0].phone} name="phone" required/>
               <br/><input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" defaultValue={info[0].email} name="email" required/>
               <br/><input type="submit" value="Update" />
            </form>
        </div>
    )
    }
}

export default ContactInformation;