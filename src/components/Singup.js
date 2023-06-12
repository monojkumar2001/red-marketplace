import React from "react";

function Login() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Sign up</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Signup </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}

      {/* <!-- =============login section start================ -->*/}
      <section className="login-section cpy-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="form-area">
                <div className="login-form-title">
                  <h2>Sigup to NFTs</h2>
                  <p className="form-sm-title">Login with social</p>
                </div>
                <div className="social-login">
                  <a href="" className="social-login-btn">
                    <span>
                      <i className="icofont-google-plus"></i>
                      Google
                    </span>
                  </a>
                  <a href="" className="social-login-btn">
                    <span>
                      <i className="icofont-facebook"></i>
                      Facebook
                    </span>
                  </a>
                </div>
                <p className="form-sm-title">Or login with email</p>
                <div className="form-area">
                  <form action="">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Set Your Password"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="forget-area">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Default checkbox
                          </label>
                        </div>
                        <a href="" className="forget-link">
                          Forgot Password ?
                        </a>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="social-login-btn" type="submit">
                        <span>Sign up</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
