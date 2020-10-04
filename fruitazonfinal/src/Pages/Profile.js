import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Cookies from "universal-cookie";

const cookies = new Cookies();
class ProfilePage extends Component {
  constructor() {
    super();
    this.changeChild = React.createRef();
  }
  state = {
    user: false,
    name: "",
    address: "",
    email: "",
  };

  componentWillMount() {
    var self = this;
    var token = cookies.get(["jwtToken"]);
    if (token !== undefined) {
      self.setState({
        user: true,
      });
      axios
        .post("http://localhost:3002/user/userdata", {
          token: token,
        })
        .then(function (response) {
          console.log(response);
          self.setState({
            name: response.data.return.name,
            address: response.data.return.address,
            email: response.data.return.email,
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
  logout = () => {
    var self = this;
    cookies.remove(["jwtToken"]);

    this.setState({
      user: false,
    });
    self.props.handlerLogout();
  };

  render() {
    if (!this.state.user) {
      return <Redirect to="/login"></Redirect>;
    } else {
      return (
        <div>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title py-5">
                Selamat Datang, {this.state.name}!
              </h5>
              <p className="card-text py-5">
                Berikut adalah data diri kamu -- <br /> Email:{" "}
                {this.state.email} <br /> Alamat: {this.state.address}
              </p>
              <div className="py-5">
                <button
                  type="button"
                  className="site-btn"
                  onClick={() => this.logout()}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProfilePage;
