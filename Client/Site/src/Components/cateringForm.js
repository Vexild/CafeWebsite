import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import local from 'date-fns/locale/fi';


const CateringForm =  () => {

    const [startDate, setStartDate] = useState(new Date());
    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [location, setLocation] = useState('')

    const dummyReservedDaysData = [  new Date("7/30/2020") , new Date("7/2/2020"), new Date("July 29, 2020") ];

    const handleSetComment = (event) => {
      // console.log(event.target.value)
      setComment(event.target.value)
    }

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

    const handleSetLocation = (event) => {
      // console.log(event.target.value)
      setLocation(event.target.value)
    }

    const submitForm = (event) => {
      event.preventDefault();
      console.log(comment, name, email, phonenumber, location, startDate.toDateString())
    }

    return(

      <Container>

        <Col className="d-flex justify-content-center">

          <Form onSubmit = {submitForm}>

          <Form.Row>
            <Col>
              <h3>Tilaisuuden tiedot</h3>
              <p>
                Voit varata pitopalvelun alla olevalla lomakkeella.
                loorem ipsumia lalalallaalala
              </p>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label>Kommentti:</Form.Label>
              <Form.Control as="textarea" placeholder="Vapaata tekstiä" onChange={handleSetComment} required/>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label>Nimi:</Form.Label>
              <Form.Control type="text" placeholder="Matti Meikäläinen" onChange={handleSetName} required/>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label>Sähköposti:</Form.Label>
              <Form.Control type="email" placeholder="nimi@esimerkki.com" onChange={handleSetEmail} required/>
            </Col>

            <Col>
              <Form.Label>Puhelinnumero:</Form.Label>
              <Form.Control type="tel" placeholder=" Esimerkki 0401231234" onChange={handleSetPhonenumber} required/>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label>Paikka:</Form.Label>
              <Form.Control as="select" onChange={handleSetLocation} required>
                <option> </option>
                <option>Lilja 100 + 50 hlö</option>
                <option>sample 20 hlö</option>
              </Form.Control>
            </Col>
              
            <Col>
              <Form.Label>Päivämäärä:</Form.Label>
              <DatePicker
              selected={startDate}
              minDate={Date.now()}
              dateFormat="dd.MM.yyyy"
              locale={local}
              onChange={date => setStartDate(date)}
              excludeDates={dummyReservedDaysData}
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

export default CateringForm;