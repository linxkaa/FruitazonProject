import React, { Component } from "react";
import axios from "axios";

class LoginRegister extends Component {
  state = {
    data: [],

    loading: false,
  };
  componentWillMount() {}
  post(refs) {
    var self = this;

    axios
      .post("http://localhost:3002/user/login", {
        username: refs.username.value,
        password: refs.password.value,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
              <div className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-32">
                  Account Login
                </span>
                <span className="txt1 p-b-11">Username</span>
                <div
                  className="wrap-input100 validate-input m-b-36"
                  data-validate="Username is required"
                >
                  <input className="input100" type="text" ref="username" />
                  <span className="focus-input100" />
                </div>
                <span className="txt1 p-b-11">Password</span>
                <div
                  className="wrap-input100 validate-input m-b-12"
                  data-validate="Password is required"
                >
                  <span className="btn-show-pass">
                    <i className="fa fa-eye" />
                  </span>
                  <input className="input100" type="password" ref="password" />
                  <span className="focus-input100" />
                </div>
                <div className="flex-sb-m w-full p-b-48">
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    onClick={() => this.post(this.refs)}
                    className="login100-form-btn"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginRegister;
