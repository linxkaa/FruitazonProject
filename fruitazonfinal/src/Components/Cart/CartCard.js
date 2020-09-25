import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
export default function CartCard({ id, image, title, price, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );
  console.log(image);
  console.log(id);
  return (
    <>
      <tr>
        <th scope="row">
          <div className="p-2">
            <img
              src={image}
              width={70}
              className="img-fluid rounded shadow-sm"
            />
            <div className="ml-3 d-inline-block align-middle">
              <h5 className="mb-0">
                {" "}
                <a href="#" className="text-dark d-inline-block align-middle">
                  {title}
                </a>
              </h5>
              <span className="text-muted font-weight-normal font-italic d-block">
                Category: Vegetables &amp; Fruits
              </span>
            </div>
          </div>
        </th>
        <td className="align-middle">
          <strong>Rp{price}</strong>
        </td>
        <td className="align-middle ">
          <BtnUpDown>
            <button
              type="button"
              className="cart-btn amount-btn"
              onClick={() => {
                increaseAmount(id);
              }}
            >
              <FaAngleUp />
            </button>
            <strong className="text-center">{amount}</strong>
            <button
              type="button"
              className="cart-btn amount-btn"
              onClick={() => {
                decreaseAmount(id, amount);
              }}
            >
              <FaAngleDown />
            </button>
          </BtnUpDown>
        </td>
        <td className="align-middle">
          <a className="text-dark">
            <i
              className="fa fa-trash"
              onClick={() => {
                removeItem(id);
                // console.log("item removed");
              }}
            />
          </a>
        </td>
      </tr>
      <tr></tr>
    </>
  );
}

const BtnUpDown = styled.div`
  .cart-btn {
    border: none;
    background: none;
    color: #4a9096;
    font-size: 1.2rem;
  }
`;
