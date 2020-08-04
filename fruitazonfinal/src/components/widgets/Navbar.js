import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <header>
          <div className="humberger__menu__overlay" />
          <div className="humberger__menu__wrapper">
            <div className="humberger__menu__logo">
              <a href="#">
                <img
                  key={Date.now()}
                  src={require("../../assets/img/Fruitazon.png")}
                />
              </a>
            </div>
            <div className="humberger__menu__cart">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-heart" /> <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-bag" /> <span>3</span>
                  </a>
                </li>
              </ul>
              <div className="header__cart__price">
                item: <span>$150.00</span>
              </div>
            </div>
            <nav className="humberger__menu__nav mobile-menu">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap" />
            <div className="header__top__right__social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#">
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
                      src={require("../../assets/img/Fruitazon.png")}
                      width="50"
                      length="50"
                      alt
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>

                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" /> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag" /> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user" /> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
