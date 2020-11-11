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
import axios from "axios";

const cookies = new Cookies();

class App extends Component {
  state = {
    loggedIn: false,
    cartData: [],
    invoiceData: [],
  };

  constructor(props) {
    super(props);

    this.handlerLogin = this.handlerLogin.bind(this);
    this.handlerLogout = this.handlerLogout.bind(this);
    this.cartLength = this.cartLength.bind(this);
    this.handlerInvoiceData = this.handlerInvoiceData.bind(this);
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
    this.handlerInvoiceData();
  }

  handlerInvoiceData() {
    var self = this;
    var cookiesUserid = cookies.get("userId");
    // console.log(cookiesUserid.id);
    if (cookiesUserid != null) {
      axios
        .post("http://localhost:3002/products/invoicedata", {
          user_id: cookiesUserid.id,
        })
        .then((response) => {
          console.log(response.data.return);
          // console.log("function kepanggil");
          // cartData = response.data.return;
          self.setState({ invoiceData: response.data.return });
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

  cartLength() {
    var cookieCartlist = cookies.get("cart_list");

    this.setState({ cartData: cookieCartlist });
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
        <Route
          exact
          path="/"
          render={() => <Homepage handlerCartData={this.cartLength} />}
        />
        <Route
          path="/shop"
          render={() => <Shop handlerCartData={this.cartLength} />}
        />
        <Route path="/invoice" component={InvoicePages} />
        <Route path="/editprofile" component={EditProfilePage} />
        <Route
          path="/confirm"
          render={() => (
            <InvoiceHeader
              invoiceData={this.state.invoiceData}
              handlerInvoiceData={this.handlerInvoiceData}
            />
          )}
        />
        <Route
          path="/invoicedetail/:id/:status"
          render={(props) => (
            <InvoiceDetail
              handlerInvoiceData={this.handlerInvoiceData}
              {...props}
            />
          )}
          // component={InvoiceDetail}
        />

        <Route
          path="/profile"
          render={() => <ProfilePage handlerLogout={this.handlerLogout} />}
        />
        <Route path="/register" component={RegisterPage} />

        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={SingleProductPage} />
        <Route
          path="/cart"
          render={() => (
            <CartPage handlerInvoiceData={this.handlerInvoiceData} />
          )}
        />
        <Footer />
      </>
    );
  }
}

export default App;
