import React from "react";

function Contact() {
  return (
    <>
      {/*
            <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Contact</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Contact 2 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
            <!-- =============page banner end================ -->*/}
      {/* ================wallet=================== */}
      <div className="wallet-wrapper cpy-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="wallet-wrapper-title">
                <h2>Drop up a message</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
              </div>
            </div>
          </div>

          <div className="wallet-card-item mt-5">
            <form action="">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <select
                        className="form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <div className="mb-3">
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          className="form-control"
                          rows="5"
                          placeholder="e.g. “This is very limited item”"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <button type="submit" className="custom-btn">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ================wallet end=================== */}
    </>
  );
}

export default Contact;
