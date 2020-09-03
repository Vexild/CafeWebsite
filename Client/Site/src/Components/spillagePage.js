import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import local from 'date-fns/locale/fi';
import Modal from 'react-modal';
import axios from 'axios'
import apiUrl from '../api'


const SpillagePage =  () => {

    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [succcessModal, setSuccessModal] = useState(false)
    const dummyReservedDaysData = [  new Date("7/30/2020") , new Date("7.2.2020"), new Date("July 29, 2020") ];
    
    const successModalStyle = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
     transform             : 'translate(-50%, -50%)',
           position				  : 'absolute'
      },
      overlay: {zIndex: 1000}
    };
    const closeSuccessModal = () => {
      setSuccessModal(false)
      window.location.reload(false);
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

    async function onChange(value){
      console.log("ReCaptcha clicked")
    }

    const submitForm = (event) => {
      event.preventDefault();
        const title = "Hävikkijono ilmoitus"
        const message =` 
        Hävikkijono ilmoitus
        Nimi: ${name}
        Sähköposti: ${email}
        Puh nro: ${phonenumber}
        Päivämäärä: ${startDate}
                
        Tämä on lähetetty sisäisestä palvelusta.`
        const mail = { to: email, subject: title, text: message}
        axios.post(apiUrl + "/api/mail/post",mail)
          .then(Response => {
            console.log(Response);
            localStorage.clear();
            setSuccessModal(true);
          })
          .catch(err => {
            console.log(err)
          })
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
            <Button type="submit">
              Lähetä
            </Button>
          </Col>

        </Form>
      </Col>
      <Modal 
          isOpen={succcessModal}
          onRequestClose={closeSuccessModal}
          style={successModalStyle}
          contentLabel="Spillage">
          <h3>Teidät on lisätty jonoon!</h3>
          <p>Ilmoitamme tarkempia tietoja pian sähköpostilla.</p>
          <Button onClick={closeSuccessModal} >OK</Button>                    
      </Modal>
    </Container>

)
}

export default SpillagePage;
