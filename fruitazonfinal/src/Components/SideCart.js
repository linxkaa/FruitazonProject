import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "universal-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import EmptyCart from "./Cart/EmptyCart";

const cookies = new Cookies();

export default function SideCart() {
  const [cart, setCart] = useState([]);
  const [productQty, setProductQty] = useState([]);

  function countAmount(id) {
    var amount = 0;
    for (var i = 0; i < productQty.length; i++) {
      if (productQty[i].id == id) {
        amount = productQty[i].qty;
      }
    }
    return amount;
  }

  function idQtyObject() {
    var result = {};
    var cookieCartlist = cookies.get("cart_list");

    [...cookieCartlist].forEach((x) => (result[x] = (result[x] || 0) + 1));
    var test = Object.entries(result).map((item) => ({
      id: parseInt(item[0]),
      qty: item[1],
    }));
    var joined = productQty.concat(test);
    setProductQty(joined);
  }
  useEffect(() => {
    var cookieCartlist = cookies.get(["cart_list"]);
    var token = cookies.get(["jwtToken"]);
    if (token !== undefined) {
      // this.setState({
      //   user: true,
      // });
    }
    if (cookieCartlist !== undefined) {
      if (cookieCartlist.length !== 0) {
        axios
          .post("http://localhost:3002/products/cart", {
            product_ids: cookieCartlist,
          })
          .then((response) => {
            setCart(response.data.return);
            // console.log(response.data.return);
          });
      } else {
        console.log("test");
      }
      idQtyObject();
    }
  }, []);

  return (
    <CartWrapper>
      <div>
        <div
          className="modal fade"
          id="cartModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalScrollableTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalScrollableTitle">
                  Your Shopping Cart
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                {cart == undefined ? (
                  <EmptyCart />
                ) : cart.length == 0 ? (
                  <EmptyCart />
                ) : (
                  <table className="table table-image">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">Product</th>

                        <th scope="col">Qty</th>
                        <th scope="col">Item Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return (
                          <tr>
                            <td className="w-25">
                              <img
                                src={item.img}
                                className="img-fluid img-thumbnail"
                                alt="Sheep"
                              />
                            </td>
                            <td>{item.title}</td>

                            <td className="qty">{countAmount(item.id)}</td>
                            <td>Rp{item.price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
              {cart == undefined ? (
                <div></div>
              ) : cart.length == 0 ? (
                <div></div>
              ) : (
                <div className="modal-footer border-top-0 d-flex justify-content-between">
                  <Link
                    to="/cart"
                    // type="button"
                    className="site-btn"
                    // data-dismiss="modal"
                  >
                    Open Cart
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  .container {
    padding: 2rem 0rem;
  }

  .table-image {
    thead {
      td,
      th {
        border: 0;
        color: #666;
        font-size: 0.8rem;
      }
    }

    td,
    th {
      vertical-align: middle;
      text-align: center;

      &.qty {
        max-width: 2rem;
      }
    }
  }

  .price {
    margin-left: 1rem;
  }

  .modal-footer {
    padding-top: 0rem;
  }
`;
