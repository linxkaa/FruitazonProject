import React, { Component } from "react";

import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SideCart from "./Components/SideCart";
import Footer from "./Components/Footer";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SingleProductPage from "./Pages/SingleProductPage";
import LoginRegister from "./Components/LoginRegister";

import CartPage from "./Pages/Cart";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SideCart />
        <LoginRegister />
        <Switch>
          <Route exact path="/" exact component={Homepage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/product/:id" component={SingleProductPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
