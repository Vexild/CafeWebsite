import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProductList from "./Components/productList"
import TagList from "./Components/tagList"
import ContactInformation from "./Components/contactInformation"
import BusinessHours from "./Components/businessHours";
import EditAboutus from "./Components/editAboutus";
import DailyDeals from './Components/dailyDeals'
import './App.css';

function App() {

  const [view, setView] = useState("main");

  return (
    <div>
      <header>
        <h1>Control Panel</h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/contact-information">Contact Info</Link>
        <Link to="/media"></Link>
        <Link to="/business-hours">Business Hours</Link>
        <Link to="/edit-aboutus">Edit Aboutus</Link>
        <Link to="/DailyDeals">Daily deal</Link>

      </nav>

      <Switch>
        <Route path="/DailyDeals">
          <DailyDeals />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/tags">
          <TagList />
        </Route>
        <Route path="/contact-information">
          <ContactInformation />
        </Route>
        <Route path="/media">

        </Route>
        <Route path="/business-hours">
          <BusinessHours />
        </Route>

        <Route path="/edit-aboutus">
          <EditAboutus />
        </Route>

        <Route path="/">
          <p>Oisko vaikka documentation tässä vakio näkymässä</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
