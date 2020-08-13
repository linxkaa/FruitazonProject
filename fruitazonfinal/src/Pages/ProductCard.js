import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";

const ProductCard = ({ product }) => {
  const { addToCart } = React.useContext(CartContext);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat ">
      <div className="featured__item">
        <div className="featured__item__pic set-bg">
          <img
            src={product.img}
            width="345"
            height="220"
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
              <Link to={`/product/${product.id}`}>
                <i className="fa fa-search" />
              </Link>
            </li>
            <li
              onClick={() => {
                addToCart(product);
              }}
            >
              <Link>
                <i className="fa fa-shopping-cart" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#"> {product.title}</a>
          </h6>
          <h5>{product.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
