import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class InvoiceHeader extends Component {
  // state = {
  //   invoiceData: [],
  // };

  async componentDidMount() {
    var self = this;

    await self.props.handlerInvoiceData();
  }

  convertTime = (time) => {
    var d = new Date(time.toString());
    return `${d.getDate()}/${
      parseInt(d.getMonth()) < 10 ? "0" + d.getMonth() : d.getMonth()
    }/${d.getFullYear()} -- ${d.getHours()}:${
      parseInt(d.getMinutes()) < 10 ? "0" + d.getMinutes() : d.getMinutes()
    }`;
  };
  render() {
    return (
      <>
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">
                            Purchase ID
                          </div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase"> Status</div>
                        </th>

                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">
                            See Invoice Detail
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.invoiceData.map((item) => {
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
                                      {item.id}
                                    </a>
                                  </h5>
                                  <span className="text-muted font-weight-normal font-italic d-block">
                                    Time purchase: {this.convertTime(item.time)}
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="align-middle">
                              <strong>
                                {item.status_payment == 0
                                  ? "Waiting for confirmation"
                                  : item.status_payment == 1
                                  ? "Order confirmed"
                                  : "Paid"}
                              </strong>
                            </td>

                            <td className="align-middle">
                              <Link
                                to={`/invoicedetail/${item.id}/${item.status_payment}`}
                                type="button"
                                className="primary-btn rounded-pill py-2 "
                              >
                                Detail
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* End */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InvoiceHeader;
