import React, { Component } from "react";

import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
    );
  }
}

export default App;
