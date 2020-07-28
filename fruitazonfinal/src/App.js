import React, { Component } from "react";

import "./App.scss";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
