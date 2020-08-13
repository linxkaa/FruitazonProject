import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import EmptyCart from "../Components/Cart/EmptyCart";
import { Link } from "react-router-dom";
import CartItem from "../Components/Cart/CartItem";
import CartCard from "../Components/Cart/CartCard";
// import { UserContext } from "../context/user";

export default function CartPage() {
  function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  let user = false;
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  } else {
    return (
      <>
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {/* Shopping cart table */}
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        return <CartCard key={item.id} {...item}></CartCard>;
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row justify-content-end">
                  <Link
                    type="button"
                    className="primary-btn rounded-pill py-2 "
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </Link>
                </div>
                {/* End */}
              </div>
            </div>
            {/* Invoice cart table */}

            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Instructions for seller
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    name
                    cols={30}
                    rows={2}
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      <strong>{`Rp${numberWithDot(total)}`}</strong>
                    </li>

                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Tax</strong>
                      <strong>Free</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">{`Rp${numberWithDot(
                        total
                      )}`}</h5>
                    </li>
                  </ul>
                  {user ? (
                    <Link
                      to="/checkout"
                      href="#"
                      className="primary-btn rounded-pill py-2 btn-block text-center"
                    >
                      Procceed to checkout
                    </Link>
                  ) : (
                    <Link
                      type="button"
                      className="primary-btn rounded-pill py-2 btn-block text-center"
                      data-toggle="modal"
                      data-target="#modalLoginRegister"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </>
    );
  }
}
