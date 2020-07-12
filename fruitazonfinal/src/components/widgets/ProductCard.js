import React, { Component } from "react";

class ProductPage extends Component {
  render() {
    return (
      <div>
        <div className="single-item">
          <div
            className="img"
            style={{
              backgroundImage: `url(${require("../../assets/images/buah-jambu1.png")})`,
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
      </div>
    );
  }
}

export default ProductPage;
