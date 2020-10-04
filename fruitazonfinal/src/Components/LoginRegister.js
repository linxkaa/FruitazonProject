import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Redirect, Link } from "react-router-dom";

const cookies = new Cookies();

class LoginRegister extends Component {
  state = {
    data: [],
    errorMsg: "",
  };
  componentWillMount() {
    var self = this;
    let jwtToken = cookies.get("jwtToken");

    if (jwtToken != undefined) {
      self.props.handler();
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  post = async (refs) => {
    var self = this;

    axios
      .post("http://localhost:3002/user/login", {
        username: refs.username.value,
        password: refs.password.value,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success && response.data.token != undefined) {
          cookies.set("jwtToken", response.data.token, { path: "/" });
        }
        if (response.data.errorCode == null) {
          self.setState({
            login: true,
          });

          console.log('handler kepanggil');
          self.props.handlerLogin();
        } else {
          self.setState({
            login: false,
            errorMsg: response.data.msg,
          });
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  render() {
    if (this.state.login) {
      return <Redirect to="/cart" />;
    }
    return (
      <>
        <div className="limiter">
          <form onSubmit={this.handleSubmit}>
            <div className="container-login100">
              <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
                <div className="login100-form validate-form flex-sb flex-w">
                  <span className="login100-form-title p-b-32">
                    Account Login
                  </span>
                  <span className="p-b-11">Username</span>
                  <div
                    className="wrap-input100 validate-input m-b-36"
                    data-validate="Username is required"
                  >
                    <input
                      required
                      className="input100"
                      type="text"
                      ref="username"
                    />
                    <span className="focus-input100" />
                  </div>
                  <span className=" p-b-11">Password</span>
                  <div
                    className="wrap-input100 validate-input m-b-12"
                    data-validate="Password is required"
                  >
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
                  <div>
                    {" "}
                    <br />
                  </div>
                  <div className="container-login100-form-btn">
                    <button
                      onClick={() => {
                        if (
                          this.refs.username.value.length !== 0 &&
                          this.refs.password.value.length !== 0
                        ) {
                          this.post(this.refs);
                        }
                      }}
                      className="login100-form-btn"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div>
                  {" "}
                  <br />
                </div>
                <div className="errorMsg">{this.state.errorMsg}</div>

                <div>
                  Didn't have account?
                  <Link to="/register" className="login-hover">
                    {" "}
                    Register here
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginRegister;
