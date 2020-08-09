import React, { Component } from "react";
import Navbar from "./Components/Navbar";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <section className="breadcrumb-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="breadcrumb__text">
                    <h2>Contact Us</h2>
                    <div className="breadcrumb__option">
                      <a href="./index.html">Home</a>
                      <span>Contact Us</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                  <div className="contact__widget">
                    <span className="fa fa-phone" />
                    <h4>Phone</h4>
                    <p>+62 811123567</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                  <div className="contact__widget">
                    <span className="fa fa-address-book" />
                    <h4>Address</h4>
                    <p>Jakarta</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                  <div className="contact__widget">
                    <span className="fa fa-shopping-bag" />
                    <h4>Open time</h4>
                    <p>10:00 am to 23:00 pm</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                  <div className="contact__widget">
                    <span className="fa fa-envelope" />
                    <h4>Email</h4>
                    <p>hello@purwadhika.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;
