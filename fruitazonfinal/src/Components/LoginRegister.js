import React from "react";

export default function LoginRegister() {
  return (
    <>
      <div
        className="modal fade show"
        id="modalLoginRegister"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Pills */}
              <ul className="nav md-pills nav-justified pills-primary">
                <li className="nav-item">
                  <a
                    className="nav-link border  border-rounded btn btn-outline-dark show"
                    data-toggle="tab"
                    href="#modalLoginRegister-login"
                    role="tab"
                    aria-selected="true"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link border btn btn-outline-dark border-rounded"
                    data-toggle="tab"
                    href="#modalLoginRegister-register"
                    role="tab"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              {/* Pills */}
              {/* Content */}
              <div className="tab-content py-0">
                {/* First panel */}
                <div
                  className="tab-pane fade in show active"
                  id="modalLoginRegister-login"
                  role="tabpanel"
                >
                  {/* Login form */}
                  <form
                    id="formLoginRegister-login"
                    className="pt-2"
                    action="login"
                    method="post"
                  >
                    <div className="md-form md-outline row mx-auto justify-items-start align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-envelope prefix " />
                      </div>
                      <input
                        required
                        type="email"
                        placeholder="Your Email"
                        id="formLoginRegiser-email"
                        className="form-control col-lg-11"
                      />
                    </div>
                    <div className="md-form md-outline row mx-auto justify-items-start align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-lock prefix " />
                      </div>
                      <input
                        required
                        type="password"
                        placeholder="Your Password"
                        id="formLoginRegiser-password"
                        className="form-control col-lg-11"
                      />
                    </div>

                    <div className="text-center mt-4 pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-dark mr-1 mb-2 waves-effect waves-light"
                      >
                        Forgot password?
                      </button>
                      <button
                        type="button"
                        className="btn primary-btn p-2 mb-2"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  {/* Login form */}
                </div>
                {/* First panel */}
                {/* Second panel */}
                <div
                  className="tab-pane fade"
                  id="modalLoginRegister-register"
                  role="tabpanel"
                >
                  {/* Register form */}
                  <form
                    id="formLoginRegister-register"
                    className="pt-2"
                    action="register"
                    method="post"
                  >
                    <div className="md-form md-outline row mx-auto justify-items-start align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-user prefix " />
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        id="formLoginRegister-name"
                        className="form-control col-lg-11"
                      />
                    </div>
                    <div className="md-form md-outline row mx-auto justify-content-center align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-pencil prefix" />
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="Your username"
                        id="formLoginRegister-username"
                        className="form-control col-lg-11"
                      />
                    </div>
                    <div className="md-form md-outline row mx-auto justify-content-center align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-envelope prefix" />
                      </div>
                      <input
                        required
                        type="email"
                        placeholder="Your Email"
                        id="formLoginRegister-email-example"
                        className="form-control col-lg-11"
                      />
                    </div>
                    <div className="md-form md-outline row mx-auto justify-content-center align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-lock prefix" />
                      </div>
                      <input
                        required
                        type="password"
                        placeholder="Your password"
                        id="formLoginRegister-password-example"
                        className="form-control col-lg-11"
                      />
                    </div>
                    <div className="md-form md-outline row mx-auto justify-content-center align-items-center my-3">
                      <div className="mx-auto">
                        <i className="fa fa-key prefix" />
                      </div>
                      <input
                        required
                        type="password"
                        placeholder="Repeat password"
                        id="formLoginRegister-password-repeat"
                        className="form-control col-lg-11"
                      />

                      <button type="button" className="btn site-btn mt-5">
                        Sign up
                      </button>
                    </div>
                  </form>
                  {/* Register form */}
                </div>
                {/* Second panel */}
              </div>
              {/* Content */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="site-btn-2 waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
