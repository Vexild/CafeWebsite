import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Product from './Product'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from './Components/commonMap';
import "./css/styles.css";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>

          <CommonHeader/>
        
        </Row>

        <Row>
          <h4>Middle</h4>
        </Row>
    
        <Row fluid>
          <CommonFooter/>

        </Row>
      
      </Container>
    </div>
  )
}

export default App;
