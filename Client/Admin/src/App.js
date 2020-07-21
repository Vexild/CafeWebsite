import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProductList from "./Components/productList"
import TagList from "./Components/tagList"
import ContactInformation from "./Components/contactInformation"
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
        <Link to="/contact-information"></Link>
        <Link to="/media"></Link>
      </nav>

      <Switch>
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
        <Route path="/">
          <p>Oisko vaikka documentation tässä vakio näkymässä</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
