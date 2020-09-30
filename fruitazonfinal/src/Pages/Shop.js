import React, { Component, useContext } from "react";
import { ProductContext } from "../context/product";
import ProductCard from "./ProductCard";
import axios from "axios";
var loadjs = require("loadjs");

class Shop extends Component {
  // useEffect(() => {
  // }, []);
  state = {
    products: [],
  };

  componentWillMount() {
    loadjs(["./assets/js/main.js"], function () {});

    axios.get("http://localhost:3002/products/select").then((response) => {
      this.setState({
        products: response.data.return,
      });
    });
  }
  filteredProductByCat = (name) => {
    axios
      .get(`http://localhost:3002/products/filteredbycat?search=${name}`)
      .then((response) => {
        this.setState({ products: response.data.return });
      });
  };
  filteredproduct = (name) => {
    axios
      .get(
        `http://localhost:3002/products/filteredproduct?search=${name.search.value}`
      )
      .then((response) => {
        this.setState({
          products: response.data.return,
        });
      });
    console.log(name.search.value);
  };

  render() {
    return (
      <>
        <section className="hero mt-3">
          <div className="container">
            <div className="col-lg-12">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form>
                    <input
                      type="text"
                      placeholder="What do you need?"
                      ref="search"
                    />
                    <button
                      type="button"
                      className="site-btn"
                      onClick={() => this.filteredproduct(this.refs)}
                    >
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+62 811123567</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <div className="sidebar">
                  <div className="sidebar__item">
                    <h4>Categories</h4>
                    <ul>
                      <li>
                        <button
                          className="pb-3"
                          onClick={() =>
                            this.filteredProductByCat("vegetables")
                          }
                        >
                          Vegetables
                        </button>
                      </li>

                      <li>
                        <button
                          onClick={() => this.filteredProductByCat("fruits")}
                        >
                          Fresh Fruits
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__item">
                    <h4>Price</h4>
                    <div className="price-range-wrap">
                      <div
                        className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                        data-min={10}
                        data-max={540}
                      >
                        <div className="ui-slider-range ui-corner-all ui-widget-header" />
                        <span
                          tabIndex={0}
                          className="ui-slider-handle ui-corner-all ui-state-default"
                        />
                        <span
                          tabIndex={0}
                          className="ui-slider-handle ui-corner-all ui-state-default"
                        />
                      </div>
                      <div className="range-slider">
                        <div className="price-input">
                          <input id="minamount" />
                          <input id="maxamount" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9 col-md-7 ">
                <div class="row">
                  {this.state.products.map((item) => {
                    return (
                      <ProductCard key={item.id} {...item} product={item} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Shop;
