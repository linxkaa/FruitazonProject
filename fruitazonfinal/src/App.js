import React, { Component } from "react";

import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Pages/Components/Navbar";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import DetailProduct from "./Pages/DetailProduct";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/detailproduct/:id" component={DetailProduct} />
        </Switch>
      </div>
    );
  }
}

export default App;
