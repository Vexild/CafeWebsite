import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const MyForm = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSetEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handleSetName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(email, name)
    }
    return (
    <div>
      <Form onSubmit={submitForm}>
          
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="email" onChange={handleSetEmail} />
            <Form.Text className="text-muted" >
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="nimi" onChange={handleSetName} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Log these
        </Button>
      </Form> 
    </div>
    )

}

export default MyForm;