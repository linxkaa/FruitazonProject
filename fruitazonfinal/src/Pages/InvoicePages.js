import React, { Component } from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import axios from "axios";

const cookies = new Cookies();

class InvoicePages extends Component {
  state = {
    cartData: [],
    loading: false,
  };
  numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  componentWillMount() {
    var cookieCartlist = cookies.get(["cart_list"]);

    axios
      .post("http://localhost:3002/products/cart", {
        product_ids: cookieCartlist,
      })
      .then((response) => {
        // cartData = response.data.return;
        this.setState({ cartData: response.data.return });

        // console.log(response.data.return);
      });
    this.authLogin();
  }

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

  authLogin() {
    let jwtToken = cookies.get("jwtToken");

    if (jwtToken !== undefined) {
      this.setState({
        loading: true,
      });
    }
  }

  render() {
    if (this.state.loading == false) {
      return <Redirect to="/login" />;
    } else {
      return (
        <>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <div className=" py-5 p-4 bg-white rounded shadow">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="text-center pb-4">
                        <strong>Order summary</strong>
                      </h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table className="table table-condensed">
                          <thead>
                            <tr>
                              <td>
                                <strong>Item Name</strong>
                              </td>
                              <td className="text-center">
                                <strong>Item Price</strong>
                              </td>
                              <td className="text-center">
                                <strong>Item Quantity</strong>
                              </td>
                              <td className="text-right">
                                <strong>Total</strong>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.cartData.map((item) => {
                              return (
                                <tr>
                                  <td>{item.title}</td>
                                  <td className="text-center">
                                    Rp{this.numberWithDot(item.price)}
                                  </td>
                                  <td className="text-center">
                                    {" "}
                                    {this.countAmount(item.id)}
                                  </td>
                                  <td className="text-right">
                                    Rp
                                    {this.numberWithDot(
                                      item.price * this.countAmount(item.id)
                                    )}
                                  </td>
                                </tr>
                              );
                            })}

                            <tr>
                              <td className="highrow" />
                              <td className="highrow" />
                              <td className="highrow text-center">
                                <strong>Subtotal</strong>
                              </td>
                              <td className="highrow text-right">$958.00</td>
                            </tr>
                            <tr>
                              <td className="emptyrow" />
                              <td className="emptyrow" />
                              <td className="emptyrow text-center">
                                <strong>Shipping</strong>
                              </td>
                              <td className="emptyrow text-right">$20</td>
                            </tr>
                            <tr>
                              <td className="emptyrow">
                                <i className="fa fa-barcode iconbig" />
                              </td>
                              <td className="emptyrow" />
                              <td className="emptyrow text-center">
                                <strong>Total</strong>
                              </td>
                              <td className="emptyrow text-right">$978.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* start */}
              </div>
              {/* end */}
            </div>
          </div>
        </>
      );
    }
  }
}

export default InvoicePages;
