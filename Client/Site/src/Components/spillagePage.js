import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


const SpillagePage =  () => {

    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')

    const handleSetName = (event) => {
      // console.log(event.target.value)
      setName(event.target.value)
    }

    const handleSetEmail = (event) => {
      // console.log(event.target.value)
      setEmail(event.target.value)
    }

    const handleSetPhonenumber = (event) => {
      // console.log(event.target.value)
      setPhonenumber(event.target.value)
    }

    const submitForm = (event) => {
      event.preventDefault();
      console.log(name, email, phonenumber, startDate.toDateString())
    }

    return(

      <Container>

      <Col className="d-flex justify-content-center">

      <Form onSubmit = {submitForm}>

      <Form.Row>
        <Col>
          <h3>Hakijan tiedot</h3>
          <p>
            Auta meitä välttämään hävikkiä ostamalla päivänpäätteeksi kaikki jäljellä oleva ruoka hintaan X€.
            Täytä alla oleva lomake ja valitse päivä.
            loorem ipsumia lalalallaalala
          </p>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col>
          <Form.Label>Nimi:</Form.Label>
          <Form.Control type="text" placeholder="Matti Meikäläinen" maxLength={25} onChange={handleSetName} required/>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col>
          <Form.Label>Sähköposti:</Form.Label>
          <Form.Control type="email" placeholder="nimi@esimerkki.com" maxLength={25} onChange={handleSetEmail} required/>
        </Col>

        <Col>
          <Form.Label>Puhelinnumero:</Form.Label>
          <Form.Control type="number" placeholder=" Esimerkki 0401231234" onChange={handleSetPhonenumber} required/>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col>
          <Form.Label>Päivämäärä:</Form.Label>
          <DatePicker selected={startDate}
          onChange={date => setStartDate(date)}
          showWeekNumbers required/>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col>
          <Button type="submit">
            Lähetä
          </Button>
        </Col>
      </Form.Row>

      </Form>
      </Col>
      </Container>

)
}

export default SpillagePage;