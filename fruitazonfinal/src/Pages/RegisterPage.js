import React, { Component } from "react";
import Cookies from "universal-cookie";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

const cookies = new Cookies();

function validateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

export default class RegisterPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  state = {
    validateError: "",
    validate: false,
    login: false,
  };

  componentWillMount() {
    let jwtToken = cookies.get("jwtToken");
    if (jwtToken != undefined) {
      this.setState({
        login: true,
      });
    }
    console.log(jwtToken);
  }

  post(refs) {
    var self = this;

    axios
      .post("http://localhost:3002/user/register", {
        username: refs.username.value,
        password: refs.password.value,
        name: refs.name.value,
        address: refs.address.value,
        email: refs.email.value,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.errorCode == "OK") {
          self.setState({
            validate: true,
          });
        } else {
          self.setState({
            validateError: response.data.msg,
          });
        }
      })
      .catch(function (err) {
        // console.log(err);
      });
  }
  render() {
    if (this.state.validate) {
      return <Redirect to="/login" />;
    } else if (!this.state.login) {
      return (
        <>
          <div className="limiter">
            <form onSubmit={this.handleSubmit}>
              <div className="container-login100 mb-4">
                <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                  <div className="login100-form validate-form flex-sb flex-w">
                    <span className="login100-form-title p-b-32">
                      Register Account
                    </span>
                    {/* name */}
                    <span className="p-b-11">Name</span>
                    <div className="wrap-input100 validate-input m-b-12">
                      <input
                        required
                        className="input100"
                        type="text"
                        ref="name"
                      />
                      <span className="focus-input100" />
                    </div>
                    {/* username */}
                    <span className="p-b-11">Username</span>
                    <div className="wrap-input100 validate-input m-b-12">
                      <input
                        required
                        className="input100"
                        type="text"
                        ref="username"
                      />
                      <span className="focus-input100" />
                    </div>
                    {/* pwd */}

                    <span className=" p-b-11">Password</span>
                    <div className="wrap-input100 validate-input m-b-12">
                      <span className="btn-show-pass">
                        <i className="fa fa-eye" />
                      </span>
                      <input
                        required
                        className="input100"
                        type="password"
                        ref="password"
                      />
                      <span className="focus-input100" />
                    </div>
                    {/* address */}

                    <span className=" p-b-11">Address</span>
                    <div className="wrap-input100 validate-input m-b-12">
                      <span className="btn-show-pass">
                        <i className="fa " />
                      </span>
                      <input
                        required
                        className="input100"
                        type="text"
                        ref="address"
                      />
                      <span className="focus-input100" />
                    </div>
                    {/* email */}
                    <span className=" p-b-11">Email</span>
                    <div className="wrap-input100 validate-input m-b-12">
                      <span className="btn-show-pass">
                        <i className="fa " />
                      </span>
                      <input
                        required
                        className="input100"
                        type="text"
                        ref="email"
                      />
                      <span className="focus-input100" />
                    </div>

                    <div className="container-login100-form-btn mt-3">
                      <button
                        onClick={() => {
                          if (this.refs.password.value.length < 6) {
                            this.setState({
                              validateError:
                                "Password is less than 6 character",
                            });
                          } else if (!validateEmail(this.refs.email.value)) {
                            this.setState({
                              validateError:
                                "Invalid Email (Didn't contains domain)",
                            });
                          } else {
                            this.setState({
                              validateError: "",
                            });
                          }
                          if (
                            this.refs.name.value.length !== 0 &&
                            this.refs.username.value.length !== 0 &&
                            validateEmail(this.refs.email.value) &&
                            this.refs.address.value.length !== 0 &&
                            this.refs.password.value.length !== 0
                          ) {
                            this.post(this.refs);
                          }
                        }}
                        className="login100-form-btn"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <br />
                  </div>
                  <div className="errorMsg">{this.state.validateError}</div>

                  <div>
                    Already have account?
                    <Link to="/login" className="login-hover">
                      {" "}
                      Login here
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      );
    } else {
      return <Redirect to="/cart" />;
    }
  }
}
