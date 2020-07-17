import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker'


const CateringForm =  () => {

    const [startDate, setStartDate] = useState(new Date());
    return(

<Container>
<Col className="border d-flex justify-content-center">

<Form>
<Row>
    <Form.Label>Kommentti:</Form.Label>
    <Form.Control as="textarea" placeholder="Vapaata tekstiä"/>
</Row>


<Row>
<Form.Group>
<Form.Label>Etunimi:</Form.Label>
  <Form.Control type="text" placeholder="ETUNIMI" />
</Form.Group>

<Form.Group>
<Form.Label>Sukunimi:</Form.Label>
  <Form.Control type="text" placeholder="SUKUNIMI" />
</Form.Group>
</Row>

<Row>
<Form.Group>
    <Form.Label>Sähköposti:</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
</Form.Group>

<Form.Group>
    <Form.Label>Puhelinnumero:</Form.Label>
    <Form.Control type="text" placeholder="PUHELINNUMERO" />
</Form.Group>
</Row>

<Row>
  <Form.Group>
    <Form.Label>Paikka:</Form.Label>
    <Form.Control as="select">
      <option> </option>
      <option>Lilja 100 + 50 hlö</option>
      <option>sample 20 hlö</option>
    </Form.Control>
    </Form.Group>
    
    <Form.Group>
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      isClearable
      placeholderText="I have been cleared!"
    />
  </Form.Group>
</Row>

</Form>
</Col>
</Container>

)
}

export default CateringForm;