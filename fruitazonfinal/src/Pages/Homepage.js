import React, { Component } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import data from "../assets/js/data";
import { Link } from "react-router-dom";

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
                    <li data-filter=".fruit">Fruits</li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fast-food">Fastfood</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter text-center ">
              {
                data.products.map(product => 
                  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div className="featured__item">
                      <div className="featured__item__pic set-bg">
                        <img
                          src={product.img}
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
                              <Link to={'/detailproduct/' + product._id}><i className="fa fa-shopping-cart"/></Link>
                          </li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <a href="#">{product.name}</a>
                        </h6>
                        <h5>${product.price}</h5>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Homepage;
