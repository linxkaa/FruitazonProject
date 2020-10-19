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
  } else {
    return false;
  }
}

export default class EditProfilePage extends Component {
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
  }

  post(refs) {
    var self = this;
    var cookiesUseriD = cookies.get("userId");

    axios
      .post("http://localhost:3002/user/editprofile", {
        username: cookiesUseriD.username,
        password: cookiesUseriD.password,
        id: cookiesUseriD.id,
        name: refs.name.value,
        address: refs.address.value,
        email: refs.email.value,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.errorCode == null) {
          self.setState({
            validate: true,
          });

          cookies.remove("jwtToken", { path: "/" });
          cookies.set("jwtToken", response.data.token, { path: "/" });
          var jwtToken = cookies.get("jwtToken");

          console.log(jwtToken);
        } else {
          self.setState({
            validateError: response.data.message,
          });
        }
      })
      .catch(function (err) {
        // console.log(err);
      });
  }
  render() {
    if (this.state.validate) {
      return <Redirect to="/profile" />;
    } else if (this.state.login) {
      return (
        <>
          <div className="limiter">
            <form onSubmit={this.handleSubmit}>
              <div className="container-login100 mb-4">
                <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                  <div className="login100-form validate-form flex-sb flex-w">
                    <span className="login100-form-title p-b-32">
                      Edit Profile
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
                          if (!validateEmail(this.refs.email.value)) {
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
                            validateEmail(this.refs.email.value) &&
                            this.refs.address.value.length !== 0
                          ) {
                            this.post(this.refs);
                          }
                        }}
                        className="login100-form-btn"
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <br />
                  </div>
                  <div className="errorMsg">{this.state.validateError}</div>
                </div>
              </div>
            </form>
          </div>
        </>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}
