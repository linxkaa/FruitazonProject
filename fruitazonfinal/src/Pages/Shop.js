import React, { useEffect } from "react";
import { ProductContext } from "../context/product";
import ProductCard from "./ProductCard";
var loadjs = require("loadjs");

export default function Shop() {
  const { products } = React.useContext(ProductContext);
  useEffect(() => {
    loadjs(["../assets/js/main.js"], function () {});
  }, []);

  return (
    <>
      <section className="hero mt-3">
        <div className="container">
          <div className="col-lg-12">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <input type="text" placeholder="What do you need?" />
                  <button type="submit" className="site-btn">
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
                      <a href="#">Vegetables</a>
                    </li>

                    <li>
                      <a href="#">Fresh Fruits</a>
                    </li>

                    <li>
                      <a href="#">Fresh Juices</a>
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
                {products.map((item) => {
                  return <ProductCard key={item.id} {...item} product={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
