import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import local from 'date-fns/locale/fi';
import ReCAPTCHA from "react-google-recaptcha";

// import axios from 'axios'


const SpillagePage =  () => {

    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const key = process.env.REACT_APP_GOOGLE_API_KEY

    const dummyReservedDaysData = [  new Date("7/30/2020") , new Date("7.2.2020"), new Date("July 29, 2020") ];

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

    async function onChange(value){
      console.log("ReCaptcha clicked")
    }

    const submitForm = (event) => {
      event.preventDefault();
      console.log(name, email, phonenumber, startDate.toDateString())
    }

    return(

      <Container className="main-form form-frame">

        <Col>
          <Form onSubmit = {submitForm}>
          <Form.Row>
            <Col>
              <h3>Hävikki nouto</h3>
              <p className="dark-font">
                Auta meitä välttämään hävikkiä ostamalla päivänpäätteeksi kaikki jäljellä oleva leivonnaiset kiinteään x€ hintaan.
                
              </p>
              <p className="dark-font top-padding">
                Täytä alla oleva lomake, valitse päivä ja lähetä.
                Vastaamme sinulle sähköpostitse.
              </p>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Label>Nimi:</Form.Label>
              <Form.Control type="text" placeholder="Matti Meikäläinen" maxLength={25} onChange={handleSetName} required/>
            </Col>

            <Col>
              <Form.Label>Sähköposti:</Form.Label>
              <Form.Control type="email" placeholder="nimi@esimerkki.com" maxLength={25} onChange={handleSetEmail} required/>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Puhelinnumero:</Form.Label>
              <Form.Control type="tel" placeholder="Esimerkki 0401231234" onChange={handleSetPhonenumber} required/>
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

          <Col className="form-center-col">
            <ReCAPTCHA
            className="g-recaptcha"
            sitekey={key}
            onChange={onChange}
            />
          </Col>
        
          <Col className="form-center-col">
            <Button type="submit">
              Lähetä
            </Button>
          </Col>

        </Form>
      </Col>
    </Container>

)
}

export default SpillagePage;