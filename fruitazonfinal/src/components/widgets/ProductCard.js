import React, { Component } from "react";

class ProductPage extends Component {
  render() {
    return (
      <div>
        <div className="popular">
          <h2>Popular Products</h2>
          <div className="popular-carousel">
            <div className="single-item">
              <div
                className="img"
                style={{ backgroundImage: 'url("img/1.jpg")' }}
              />
              <div className="info">
                <h3>Duren</h3>
                <p>This is a description for the item</p>
                <div className="item-flex">
                  <div className="rating">
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                  </div>
                  <div className="price">
                    <h4>Rp12.000</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-item">
              <div
                className="img"
                style={{ backgroundImage: 'url("img/prod1.jpeg")' }}
              />
              <div className="info">
                <h3>Kangkung</h3>
                <p>This is a description for the item</p>
                <div className="item-flex">
                  <div className="rating">
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                  </div>
                  <div className="price">
                    <h4>Rp2.000</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-item">
              <div
                className="img"
                style={{
                  backgroundImage: `url(require("../../assets/images/buah-jambu1.png"))`,
                }}
              />
              <div className="info">
                <h3>Jambu</h3>
                <p>This is a description for the item</p>
                <div className="item-flex">
                  <div className="rating">
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                  </div>
                  <div className="price">
                    <h4>Rp7.000</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-item">
              <div
                className="img"
                style={{ backgroundImage: 'url("img/5.jpg")' }}
              />
              <div className="info">
                <h3>Pisang</h3>
                <p>This is a description for the item</p>
                <div className="item-flex">
                  <div className="rating">
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                  </div>
                  <div className="price">
                    <h4>Rp5.000</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-item">
              <div
                className="img"
                style={{ backgroundImage: 'url("img/prod2.jpg")' }}
              />
              <div className="info">
                <h3>Pepaya</h3>
                <p>This is a description for the item</p>
                <div className="item-flex">
                  <div className="rating">
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                    <span className="ti-star" />
                  </div>
                  <div className="price">
                    <h4>Rp15.000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
