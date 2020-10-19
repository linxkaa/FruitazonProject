import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                <div className="footer__about">
                  <div className="footer__about__logo align-items-center">
                    <a href="#">
                      <img
                        src={require("../assets/img/Fruitazon.png")}
                        width="100"
                        height="100"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>Address: Jakarta</li>
                    <li>Phone: +62 811123567</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                <div className="footer__widget">
                  <h6>Website shortcut:</h6>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="footer__widget">
                  <h6>Find us at our social media</h6>
                  <p>Get to know us better</p>

                  <div className="footer__widget__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
