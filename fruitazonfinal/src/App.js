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
import InvoicePages from "./Pages/InvoicePages";

import CartPage from "./Pages/Cart";
import ProfilePage from "./Pages/Profile";
import RegisterPage from "./Pages/RegisterPage";
import Cookies from "universal-cookie";
import EditProfilePage from "./Pages/EditProfile";
import InvoiceHeader from "./Pages/Confirmation";
import InvoiceDetail from "./Pages/InvoiceDetail";
const cookies = new Cookies();

class App extends Component {
  state = {
    loggedIn: false,
    cartData: [],
  };

  constructor(props) {
    super(props);

    this.handlerLogin = this.handlerLogin.bind(this);
    this.handlerLogout = this.handlerLogout.bind(this);
  }

  componentWillMount() {
    let jwtToken = cookies.get("jwtToken");
    var cookieCartlist = cookies.get("cart_list");

    this.setState({ cartData: cookieCartlist });
    if (jwtToken != undefined) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  handlerLogout() {
    this.setState({
      loggedIn: false,
    });
  }

  handlerLogin() {
    this.setState({
      loggedIn: true,
    });
  }

  cartLength(cart) {
    this.setState({
      cartData: cart,
    });
  }

  // renderContent() {}
  render() {
    return (
      <>
        <Navbar loggedIn={this.state.loggedIn} cartData={this.state.cartData} />
        <Route
          path="/login"
          render={() => <LoginRegister handlerLogin={this.handlerLogin} />}
        />

        <SideCart />
        <Route exact path="/" component={Homepage} />
        <Route
          path="/shop"
          component={Shop}
          handlerCartData={this.cartLength}
        />
        <Route path="/invoice" component={InvoicePages} />
        <Route path="/editprofile" component={EditProfilePage} />
        <Route path="/confirm" component={InvoiceHeader} />
        <Route path="/invoicedetail/:id/:status" component={InvoiceDetail} />

        <Route
          path="/profile"
          render={() => <ProfilePage handlerLogout={this.handlerLogout} />}
        />
        <Route path="/register" component={RegisterPage} />

        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={SingleProductPage} />
        <Route path="/cart" component={CartPage} />
        <Footer />
      </>
    );
  }
}

export default App;
