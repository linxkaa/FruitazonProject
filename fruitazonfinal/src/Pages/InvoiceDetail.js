import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class InvoiceDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      invoiceData: [],
      status: this.props.match.params.status,
      push: false,
    };
  }

  componentWillMount() {
    axios
      .post("http://localhost:3002/products/invoicedetail", {
        header_id: this.state.id,
      })
      .then((response) => {
        // cartData = response.data.return;
        console.log(response.data.return);
        if (response.data.success) {
          this.setState({ invoiceData: response.data.return });
        }
      });
  }

  confirmPayment = () => {
    var self = this;
    axios
      .post("http://localhost:3002/products/updatestatus", {
        id: self.state.id,
        status: 1,
      })
      .then(function (response) {
        axios
          .post("http://localhost:3002/products/invoicedetail", {
            header_id: self.state.id,
          })
          .then((response) => {
            // cartData = response.data.return;
            if (response.data.success) {
              self.setState({ invoiceData: response.data.return });
            }
          });
        self.setState({ push: true });
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  render() {
    return (
      <div className="container py-5">
        <div className="row bg-white rounded shadow-sm py-4">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Name</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase"> Quantity</div>
                    </th>

                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.invoiceData.map((item) => {
                    return (
                      <tr>
                        <th scope="row">
                          <div className="p-2">
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0">
                                <a
                                  href
                                  className="text-dark d-inline-block align-middle"
                                >
                                  {item.product_name}
                                </a>
                              </h5>
                              <span className="text-muted font-weight-normal font-italic d-block">
                                {/* Time purchase: {this.convertTime(item.time)} */}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <strong>
                            {/* {item.status_payment == 0 ? "Not paid" : "Paid"} */}
                            {item.product_qty} x
                          </strong>
                        </td>

                        <td className="align-middle">
                          Rp{this.numberWithDot(item.product_price)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row justify-content-end px-3">
              {this.state.status == "0" ? (
                <Link
                  //   to={this.state.push ? "/confirm" : ""}
                  to="/confirm"
                  type="button"
                  className="primary-btn  py-2  px-3"
                  onClick={() => this.confirmPayment()}
                >
                  Confirm Payment
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoiceDetail;
