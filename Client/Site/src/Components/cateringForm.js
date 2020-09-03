import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import local from 'date-fns/locale/fi';
import axios from 'axios'
import SimpleProductCard from './Panels/simpleProductCard'
import Modal from 'react-modal';
import apiUrl from '../api'


const CateringForm =  () => {
  
    const [startDate, setStartDate] = useState(new Date());
    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [location, setLocation] = useState('')
    // TODO: get the real data from DB. Needs to be in array and be a Date() format
    const dummyReservedDaysData = [ new Date("7/30/2020") , new Date("7/2/2020"), new Date("July 29, 2020") ];
    const [productsInCart, setProductsInCart] = useState([]);
    const [succcessModal, setSuccessModal] = useState(false)
    
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

    const getProductTable = () => {
      let toParse = "";
      const prod = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
      prod.map((elem) => {
        // ugly, i know
         toParse += (elem.name+" "+elem.quantity+" kappaletta")
         toParse += "\n"
       })
      return toParse
    }

    const closeSuccessModal = () => {
      setSuccessModal(false)
      window.location.reload(false);
  }

    const submitForm = (event) => {
      event.preventDefault();
        const products = getProductTable()
        const title = "Tilaus"

        const message =` 
        Asiakastilaus
        Nimi: ${name}
        Sähköposti: ${email}
        Puh nro: ${phonenumber}
        Päivämäärä: ${startDate}
        Paikka: ${location}
        
        Viesti: ${comment}
        
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
    

    const getProductsInCart = () => {
      const parsed = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
      if(parsed.length > 0){
        const products = parsed.map( elem => {
            return <SimpleProductCard data={elem} allData={productsInCart}/>
        })
        return <p>{products}</p>
      }
      else{
        return <p>Ostoskorissa ei tuotteita</p>
      }
    }

    return(

      <Container className="main-form form-frame">
        {getProductsInCart()}
        <Col>
          <Form onSubmit = {submitForm}>
          <Form.Row>
            <Col>
              <h3>Pitopalvelu ja tilaisuudet</h3>
              <p  className="dark-font">
                Voit varata pitopalvelun alla olevalla lomakkeella.
                Tarjoamme pitopalvelun lisäksi mahdolisuuksia tiloihin erikoistilaisuuksia varten.
              </p>
              <p  className="dark-font top-padding">
                Kirjoita alla olevaan kenttään tarpeesi ja vastaamme sinulle pian sähköpostitse.
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
              <Form.Control type="tel" placeholder="Esimerkki 0401231234" onChange={handleSetPhonenumber} required/>
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
        </Form>    
        <Col className="form-center-col">
          <Button onClick={submitForm} type="submit">
            Lähetä
          </Button>
        </Col>
        <Modal 
                isOpen={succcessModal}
                onRequestClose={closeSuccessModal}
                style={successModalStyle}
                contentLabel="Order">
                <h3>Tilauksesi on lähetetty!</h3>
                <p>Saat pian vahvistussähköpostin.</p>
                <p>Otamme yhteyttä tarvittaessa.</p>
                <Link to={"/"+window.location.href}>About</Link>
                <Button onClick={closeSuccessModal} >OK</Button>                    
            </Modal>
    </Col>
  </Container>
)
}

export default CateringForm;