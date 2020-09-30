import React, { Component } from "react";
import { CartContext } from "../context/cart";
import EmptyCart from "../Components/Cart/EmptyCart";
import { Link } from "react-router-dom";
import CartItem from "../Components/Cart/CartItem";
import Cookies from "universal-cookie";
import axios from "axios";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const cookies = new Cookies();

// import { UserContext } from "../context/user";

class CartPage extends Component {
  // const [cartData, setcartData] = useState([]);

  // let user = false;
  // const { cart, total, clearCart } = useContext(CartContext);
  // useEffect(() => {

  //   return () => {};
  // }, [cartData]);

  state = {
    cartData: [],
    user: false,
    total: 0,
  };

  componentWillMount() {
    var cookieCartlist = cookies.get("cart_list");

    axios
      .post("http://localhost:3002/products/cart", {
        product_ids: cookieCartlist,
      })
      .then((response) => {
        // cartData = response.data.return;
        this.setState({ cartData: response.data.return });

        // console.log(response.data.return);
      });

    // var total = this.state.cartData.map((e) => e.price);
    // console.log(total);
  }

  numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  clearAllCart = () => {
    var self = this;
    cookies.remove("cart_list", { path: "/" });
    cookies.set("cart_list", [], { path: "/" });

    var cookieCartlist = cookies.get("cart_list");
    self.setState({
      cartData: cookieCartlist,
    });
  };

  countAmount = (id) => {
    var result = {};
    var count = 0;
    var arrayKeys = [];
    var cookieCartlist = cookies.get("cart_list");

    [...cookieCartlist].forEach((x) => (result[x] = (result[x] || 0) + 1));
    arrayKeys = Object.keys(result);
    count = arrayKeys.find((e) => parseInt(e) == id);
    // var array = this.state.cartData.map((e) => e.price);
    // total += parseInt(result[`${id}`]) * array[id - 1];
    // console.log(total);
    // self.setState({
    //   total: this.state.total + total,
    // });
    // self.setState({});
    if (count == id) {
      return result[`${id}`];
    }
  };

  removedItem = (id) => {
    var cookieCartlist = cookies.get("cart_list");

    var filteredAry = [...cookieCartlist].filter((e) => e !== id);

    cookies.set("cart_list", filteredAry, { path: "/" });
    cookieCartlist = cookies.get("cart_list");

    axios
      .post("http://localhost:3002/products/cart", {
        product_ids: cookieCartlist,
      })
      .then((response) => {
        // cartData = response.data.return;
        this.setState({ cartData: response.data.return });

        // console.log(response.data.return);
      });
  };

  totalValue = () => {
    var cookieCartlist = cookies.get("cart_list");
    var totalValue = 0;
    var result = {};
    var total = [];
    if (this.state.cartData !== undefined) {
      total = this.state.cartData.map((e) => e.price);

      [...cookieCartlist].forEach((x) => (result[x] = (result[x] || 0) + 1));
      var resultArr = Object.entries(result);

      for (var i = 0; i < total.length; i++) {
        totalValue += total[i] * parseInt(resultArr[i][1]);
      }

      return totalValue;
    }
  };

  render() {
    console.log(this.totalValue());
    if (this.state.cartData === undefined) {
      return <EmptyCart />;
    } else if (this.state.cartData.length === 0) {
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
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
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
                        {this.state.cartData.map((item) => {
                          return (
                            <tr>
                              <th scope="row">
                                <div className="p-2">
                                  <img
                                    src={item.img}
                                    width={70}
                                    height={70}
                                    alt=""
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      {" "}
                                      <a
                                        href
                                        className="text-dark d-inline-block align-middle"
                                      >
                                        {item.title}
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      Category: Vegetables &amp; Fruits
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <strong>Rp{item.price}</strong>
                              </td>
                              <td className="align-middle ">
                                <button
                                  type="button"
                                  className="cart-btn amount-btn"
                                  onClick={() => {
                                    // increaseAmount(id);
                                  }}
                                >
                                  <FaAngleUp />
                                </button>
                                <strong className="text-center">
                                  {this.countAmount(item.id)}
                                </strong>
                                <button
                                  type="button"
                                  className="cart-btn amount-btn"
                                  onClick={() => {
                                    // decreaseAmount(id, amount);
                                  }}
                                >
                                  <FaAngleDown />
                                </button>
                              </td>
                              <td className="align-middle">
                                <a className="text-dark" href>
                                  <i
                                    className="fa fa-trash"
                                    onClick={() => {
                                      this.removedItem(item.id);
                                    }}
                                  />
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="row justify-content-end">
                    <Link
                      type="button"
                      className="primary-btn rounded-pill py-2 "
                      onClick={() => this.clearAllCart()}
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
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>{`Rp${this.numberWithDot(
                          this.totalValue()
                        )}`}</strong>
                        {/* {numberWithDot(total) */}
                      </li>

                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>Free</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">{`Rp${this.numberWithDot(
                          this.totalValue()
                        )}`}</h5>
                      </li>
                    </ul>
                    {this.state.user ? (
                      <Link
                        to="/checkout"
                        href="#"
                        className="primary-btn rounded-pill py-2 btn-block text-center"
                      >
                        Procceed to checkout
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        type="button"
                        className="primary-btn rounded-pill py-2 btn-block text-center"
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
}

export default CartPage;
