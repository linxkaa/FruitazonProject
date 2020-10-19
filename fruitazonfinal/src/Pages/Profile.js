import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
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
    var cookiesPwd = cookies.get("password");
    console.log(cookiesPwd.password);
    console.log(token);
    if (token !== undefined) {
      self.setState({
        user: true,
      });
      axios
        .post("http://localhost:3002/user/userdata", {
          token: token,
        })
        .then(function (response) {
          console.log(response.data.return.name);
          console.log(cookiesPwd.password);

          self.setState({
            name: response.data.return.name,
            address: response.data.return.address,
            email: response.data.return.email,
          });
          cookies.set(
            "userId",
            {
              id: response.data.return.user_id,
              username: response.data.return.username,
              password: cookiesPwd.password,
            },
            { path: "/" }
          );
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }
  logout = () => {
    var self = this;
    cookies.remove(["jwtToken"]);
    cookies.remove("userId");
    cookies.remove("password");
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
              <h5 className="card-title py-5">Welcome, {this.state.name}!</h5>
              <p className="card-text py-5">
                Here's your data profile -- <br /> Email: {this.state.email}{" "}
                <br /> Address: {this.state.address}
              </p>
              <Link to="/editprofile" className="login-hover">
                {" "}
                Edit Profile
              </Link>
              <div className="py-1">
                <Link to="/confirm" className="login-hover">
                  {" "}
                  See purchase history
                </Link>
              </div>
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
