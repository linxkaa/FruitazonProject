import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Our Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    <li data-filter=".oranges">Oranges</li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fastfood">Fastfood</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter text-center ">
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat ">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-1.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-2.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-3.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-4.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-5.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-6.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-7.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                <div className="featured__item">
                  <div className="featured__item__pic set-bg">
                    <img
                      src={require("../assets/img/featured/feature-8.jpg")}
                      alt=""
                      className="test_img"
                    />
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6>
                      <a href="#">Crab Pool Security</a>
                    </h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Homepage;
