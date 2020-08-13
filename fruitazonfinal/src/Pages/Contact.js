import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  return (
    <>
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
      <section className="py-2">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <form
              className="mt-2"
              action="https://formspree.io/fruitazonproject@gmail.com"
              method="POST"
            >
              {/* Name */}
              <div className="form-group">
                <div className="text-center mb-2">Name</div>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="John Smith"
                  name="firstName"
                />
              </div>
              {/* Email */}
              <div className="form-group">
                <div className="text-center mb-2">Email</div>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="JohnSmith@gmail.com"
                  name="email"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <div className="text-center mb-2">Subject</div>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Email Subject"
                  name="subject"
                />
              </div>
              {/* message */}
              <div className="form">
                <div className="text-center mb-2">Message</div>
                <textarea
                  required
                  className="form-control"
                  name="message"
                  rows="10"
                  placeholder="Enter your message"
                />
              </div>
              {/* submit */}
              <div className="form-group text-center my-3">
                <button type="submit" value="Send" className="site-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
