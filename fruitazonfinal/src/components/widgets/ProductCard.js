import React, { Component } from "react";

class ProductPage extends Component {
  render() {
    return (
      <div>
        <div className="single-item">
          <div
            className="img"
            style={{
              backgroundImage: `url(${require(`../../assets/images/${this.props.image}`)})`,
            }}
          />
          <div className="info">
            <h3>{this.props.name}</h3>
            <p>This is the Product description</p>
            <div className="item-flex">
              <div className="rating">
                <span className="ti-star" />
                <span className="ti-star" />
                <span className="ti-star" />
                <span className="ti-star" />
                <span className="ti-star" />
              </div>
              <div className="price">
                <h4>{this.props.price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
