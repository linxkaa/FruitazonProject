import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { linkData as links } from "../context/LinkData";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Navbar extends Component {
  componentWillMount() {
    var cookieCartlist = cookies.get("cart_list");

    this.setState({ cartData: cookieCartlist });
  }

  render() {
    return (
      <header>
        <div className="humberger__menu__overlay" />
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <a href>
              <img src={require("../assets/img/Fruitazon.png")} alt="" />
            </a>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <a href>
                  <i className="fa fa-heart" /> <span>1</span>
                </a>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fa fa-shopping-bag" /> <span>3</span>
                </Link>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>$150.00</span>
            </div>
          </div>
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.path}> {link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
          <div className="header__top__right__social">
            <a href>
              <i className="fa fa-facebook" />
            </a>
            <a href>
              <i className="fa fa-twitter" />
            </a>
            <a href>
              <i className="fa fa-linkedin" />
            </a>
            <a href>
              <i className="fa fa-pinterest-p" />
            </a>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img
                    src={require("../assets/img/Fruitazon.png")}
                    width="50"
                    length="50"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link.id}>
                        <Link to={link.path}> {link.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link>
                      <i
                        className="fa fa-shopping-bag"
                        // data-toggle="modal"
                        // data-target="#cartModal"
                      />
                      <span>{this.props.cartData?.length ?? 0}</span>
                    </Link>
                  </li>
                </ul>
                <div className="header__top__right__auth">
                  {this.props.loggedIn ? (
                    <Link to="/profile">
                      <i className="fa fa-user" /> Profile
                    </Link>
                  ) : (
                    <Link to="/login">
                      <i className="fa fa-user" /> Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
