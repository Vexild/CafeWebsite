import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


const CateringForm =  () => {

    const [startDate, setStartDate] = useState(new Date());
    return(

<Container>

<Col className="border d-flex justify-content-center">

<Form>

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
    <Form.Control as="textarea" placeholder="Vapaata tekstiä"/>
  </Col>
</Form.Row>


<Form.Row>
<Col>
<Form.Label>Nimi:</Form.Label>
  <Form.Control type="text" placeholder="Matti Meikäläinen" />
</Col>
</Form.Row>

<Form.Row>
<Col>
    <Form.Label>Sähköposti:</Form.Label>
    <Form.Control type="email" placeholder="nimi@esimerkki.com" />
</Col>

<Col>
    <Form.Label>Puhelinnumero:</Form.Label>
    <Form.Control type="text" placeholder=" Esimerkki 040 123 1234" />
</Col>
</Form.Row>

<Form.Row>
  <Col>
    <Form.Label>Paikka:</Form.Label>
    <Form.Control as="select">
      <option> </option>
      <option>Lilja 100 + 50 hlö</option>
      <option>sample 20 hlö</option>
    </Form.Control>
  </Col>
    
  <Col>
  <Form.Label>Päivämäärä:</Form.Label>
    <DatePicker selected={startDate}
    onChange={date => setStartDate(date)}
    showWeekNumbers/>
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