import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../context/cart";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class ProductCard extends Component {
  cart = (id) => {
    var cookieCartlist = cookies.get("cart_list");
    if (cookieCartlist == undefined) {
      cookies.set("cart_list", [id], { path: "/" });
    } else {
      cookieCartlist.push(id);
      cookies.set("cart_list", cookieCartlist, { path: "/" });
    }
    cookieCartlist = cookies.get("cart_list");
    // this.props.cartData(cookieCartlist);
    console.log(cookieCartlist);
    return null;
  };

  numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  render() {
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat ">
          <div className="featured__item">
            <div className="featured__item__pic set-bg">
              <img
                src={this.props.product.img}
                width="345"
                height="215"
                alt=""
                className="test_img"
              />
              <ul className="featured__item__pic__hover">
                <li>
                  <Link to={`/product/${this.props.product.id}`}>
                    <i className="fa fa-search" />
                  </Link>
                </li>
                <li onClick={() => this.cart(this.props.product.id)}>
                  <Link>
                    <i className="fa fa-shopping-cart" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="featured__item__text">
              <h6>
                <a href="#"> {this.props.product.title}</a>
              </h6>
              <h5>Rp{this.numberWithDot(this.props.product.price)}</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCard;
