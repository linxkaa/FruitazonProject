import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <EmptyCartWrapper>
      <div className="text-center my-5">
        <img
          src={require("../../assets/img/cart/empty_cart.png")}
          width="600"
          height="500"
          alt=""
        />
        <div className="text_empty">Your Cart Is Empty</div>
        <Link to="/shop" className="primary-btn mb-5 mt-3">
          SHOP NOW
        </Link>
      </div>
    </EmptyCartWrapper>
  );
}

const EmptyCartWrapper = styled.div`
  .text_empty {
    font-size: 1rem;
  }
`;
