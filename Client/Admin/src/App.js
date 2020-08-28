import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProductList from "./Components/productList"
import TagList from "./Components/tagList"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ContactInformation from "./Components/contactInformation"
import BusinessHours from "./Components/businessHours";
import EditAboutus from "./Components/editAboutus";
import DailyDeals from './Components/dailyDeals'
import Login from './Components/login'
import './App.css';

function App() {

  const [view, setView] = useState("main");

  return (
    <Container className="main-frame">
      <Row className="flex-row">
        <Col className="main-left main-left-font" md="2">
          <header>
            <h1>Cafe Sample</h1>
            <h3>Control Panel</h3>
          </header> 
          <Col className="flex-column" md="2">
            <Link className="main-left-font padded" to="/">Home</Link>
            <Link className="main-left-font padded" to="/products">Products</Link>
            <Link className="main-left-font padded" to="/tags">Tags</Link>
            <Link className="main-left-font padded" to="/contact-information">Contact Info</Link>
            <Link className="main-left-font padded" to="/media"></Link>
            <Link className="main-left-font padded" to="/business-hours">Business Hours</Link>
            <Link className="main-left-font padded" to="/edit-aboutus">Edit Aboutus</Link>
            <Link className="main-left-font padded" to="/DailyDeals">Daily deal</Link>
            <Link className="main-left-font padded" to="/login">Login</Link>
          </Col>
        </Col>
        <Col className="main-right main-left-font">
          <Switch>
            <Route path="/DailyDeals">
              <h3 className="right-page-title">DAILY DEAL</h3>
              <DailyDeals />
            </Route>
            <Route path="/products">
              <h3 className="right-page-title">PRODCT MANAGEMETN</h3>
              <ProductList />
            </Route>
            <Route path="/tags">
              <h3 className="right-page-title">TAG MANAGEMENT</h3>

              <TagList />
            </Route>
            <Route path="/contact-information">
              <h3 className="right-page-title">CONTACT INFO</h3>
              <ContactInformation />
            </Route>
            <Route path="/media">
              <h3 className="right-page-title">MEDIA</h3>

            </Route>
            <Route path="/business-hours">
              <h3 className="right-page-title">BUSINESS HOURS</h3>
              <BusinessHours />
            </Route>
            <Route path="/edit-aboutus">
              <h3 className="right-page-title">ABOUT US</h3>
              <EditAboutus />
            </Route>
            <Route path="/login">
              <h3 className="right-page-title">LOGIN</h3>
              <Login />
            </Route>

            <Route path="/">
              <p>Oisko vaikka documentation tässä vakio näkymässä</p>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
