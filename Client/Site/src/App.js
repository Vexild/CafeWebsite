import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CommonHeader from './Components/commonHeader'
import CommonFooter from './Components/commonFooter';
import PanelCanvas from './Components/panelCanvas'
import Menu from './Components/menu'
import Container from 'react-bootstrap/Container';
import Dummy from './Components/Panels/dummyPanel'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleMap from './Components/commonMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

//  eslint-disable-next-line

function App() {

  return (
    <div>
      <Container fluid>
          <CommonHeader/>

        <Row>
           {/* {site === 'frontpage' ? <PanelCanvas show={site}/>  : <Dummy /> } */}
           {/*show={site}*/}
           <PanelCanvas />
        </Row>
    
        <Row fluid>
          <CommonFooter/>

        </Row>
      
      </Container>
    </div>
  )
}

export default App;
