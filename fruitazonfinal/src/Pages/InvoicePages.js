import React, { Component } from "react";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";

const cookies = new Cookies();

class InvoicePages extends Component {
  state = {
    data: [],
    loading: false,
  };
  componentWillMount() {
    this.authLogin();
  }

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
      return <Redirect to="/login"></Redirect>;
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
                            <tr>
                              <td>Samsung Galaxy S5</td>
                              <td className="text-center">$900</td>
                              <td className="text-center">1</td>
                              <td className="text-right">$900</td>
                            </tr>
                            <tr>
                              <td>Samsung Galaxy S5 Extra Battery</td>
                              <td className="text-center">$30.00</td>
                              <td className="text-center">1</td>
                              <td className="text-right">$30.00</td>
                            </tr>
                            <tr>
                              <td>Screen protector</td>
                              <td className="text-center">$7</td>
                              <td className="text-center">4</td>
                              <td className="text-right">$28</td>
                            </tr>
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
