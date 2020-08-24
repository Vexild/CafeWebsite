import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import local from 'date-fns/locale/fi';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import { OrderContext } from './orderContext'
import SimpleProductCard from './Panels/simpleProductCard'
const CateringForm =  () => {
  
    const key = process.env.REACT_APP_GOOGLE_API_KEY;
    const sec = process.env.REACT_APP_GOOGLE_API_SEC;
    const [startDate, setStartDate] = useState(new Date());
    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [location, setLocation] = useState('')
    const [isHuman, setIsHuman] = useState(false)
    // const sec = process.env.REACT_APP_GOOGLE_API_SEC
    
    // const [daysData, setDaysDataS] = useState([])
    
    // useEffect(async () => {
    //   const result = await axios(
    //     'http://localhost:4000/api/catering/get',
    //   );
    //   console.log("UseEffect data: ",result.data);
    //   setDaysDataS(result.data)
    // }, [])

    
    //const gatheredDates = daysData.map( elem => { return new Date(elem.date)})

    const dummyReservedDaysData = [ new Date("7/30/2020") , new Date("7/2/2020"), new Date("July 29, 2020") ];
    const [productsInCart, setProductsInCart] = useState(localStorage.getItem('shoppingCart'));

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

    const handleIsHuman = () => {
      console.log(isHuman, !isHuman)
      setIsHuman(!isHuman)
      console.log(isHuman)
    }

    const submitForm = (event) => {
      event.preventDefault();
        console.log(comment, name, email, phonenumber, location, startDate.toDateString())
        const products = localStorage.getItem('shoppingCart');
        const title = "Tilaus"
        const message = "Asiakastilaus\n\nTilaaja: "+{name}+"\nSähköposti: "+{email}+"\nPuh nro: "+ {phonenumber} +"\nPaikka: "+{location}+"\n"+
          "Päivämäärä: "+{startDate} + "\n\nTuotteet:\n"+{products}+"\n\nTämä on lähetetty sisäisestä palvelusta";
        const mail = { to: 'vili.ahonen@hotmail.com', subject: title, string: message}
        axios.post('https://localhost:4000/api/mail/post', mail)
          .then(Response => {
            console.log(Response);
          })
          .catch(err => {
            console.log(err)
          })
        // do axios 
    }

    const getProductsInCart = () => {
      const parsed = JSON.parse(productsInCart);
      console.log("parsed",parsed.length)

      if(parsed.length > 0){
        const products = parsed.map( elem => {
          console.log("Elem: ",elem);
            //return elem { text, size, isButton, image}
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
      
        {/* <Col className="form-center-col">
          <ReCAPTCHA
          className="g-recaptcha"
          sitekey={key}
          onChange={onChange}
          />
        </Col> */}
      
        <Col className="form-center-col">
          <Button onClick={submitForm} type="submit">
            Lähetä
          </Button>
        </Col>
    </Col>
  </Container>

)
}

export default CateringForm;