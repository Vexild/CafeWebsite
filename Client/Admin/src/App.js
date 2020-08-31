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
            <Link className="main-left-font padded" to="/cpanel/">Home</Link>
            <Link className="main-left-font padded" to="/cpanel/products">Products</Link>
            <Link className="main-left-font padded" to="/cpanel/tags">Tags</Link>
            <Link className="main-left-font padded" to="/cpanel/contact-information">Contact Info</Link>
            <Link className="main-left-font padded" to="/cpanel/media"></Link>
            <Link className="main-left-font padded" to="/cpanel/business-hours">Business Hours</Link>
            <Link className="main-left-font padded" to="/cpanel/edit-aboutus">Edit Aboutus</Link>
            <Link className="main-left-font padded" to="/cpanel/DailyDeals">Daily deal</Link>
            <Link className="main-left-font padded" to="/cpanel/login">Login</Link>
          </Col>
        </Col>
        <Col className="main-right main-left-font">
          <Switch>
            <Route path="/cpanel/DailyDeals">
              <h3 className="right-page-title">DAILY DEAL</h3>
              <DailyDeals />
            </Route>
            <Route path="/cpanel/products">
              <h3 className="right-page-title">PRODCT MANAGEMETN</h3>
              <ProductList />
            </Route>
            <Route path="/cpanel/tags">
              <h3 className="right-page-title">TAG MANAGEMENT</h3>

              <TagList />
            </Route>
            <Route path="/cpanel/contact-information">
              <h3 className="right-page-title">CONTACT INFO</h3>
              <ContactInformation />
            </Route>
            <Route path="/cpanel/media">
              <h3 className="right-page-title">MEDIA</h3>

            </Route>
            <Route path="/cpanel/business-hours">
              <h3 className="right-page-title">BUSINESS HOURS</h3>
              <BusinessHours />
            </Route>
            <Route path="/cpanel/edit-aboutus">
              <h3 className="right-page-title">ABOUT US</h3>
              <EditAboutus />
            </Route>
            <Route path="/cpanel/login">
              <h3 className="right-page-title">LOGIN</h3>
              <Login />
            </Route>

            <Route path="/cpanel">
              <p>Oisko vaikka documentation tässä vakio näkymässä</p>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
