import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Help() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Help Center</h2>
              <div className="page-route">
              <Link to="/">Home</Link>
                <p>/ Community / Help Center </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
    <!-- =============page banner end================ -->*/}
      <div className="help-wrapper">
        <div className="help-top cpy-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-11 col-sm-10">
                <div className="help-top-content">
                  <h2>How can we help you?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laborum obcaecati dignissimos quae quo ad iste ipsum
                    officiis deleniti asperiores sit.
                  </p>
                  <div className="form-filter my-4">
                    <form
                      method="post"
                      className="search-form input-search-from"
                    >
                      <input
                        type="text"
                        className="form-control search-input ss-input"
                        placeholder="Enter your word art"
                      />
                      <button className="search-btn ss-btn" type="submit">
                        <i className="icofont-search-1"></i>
                      </button>
                    </form>
                  </div>
                  <p>
                    Or choose a categories to quickly find the help you need
                  </p>
                  <p>
                    Or choose a categories to quickly find the help you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="browser ">
          <div className="container">
            <div className="my-5">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="browser-cat-card">
                    <img src="assets/img/icon/7.svg" alt="" />
                    <h3>Getting started</h3>
                    <p>
                      Learn how to create an account, set up your wallet, and
                      what you can do.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="browser-cat-card">
                    <img src="assets/img/icon/8.svg" alt="" />

                    <h3>Creating</h3>
                    <p>
                      Learn how to purchase your first NFT and understand gas
                      fees and what's gas free.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="browser-cat-card">
                    <img src="assets/img/icon/9.svg" alt="" />

                    <h3>Buying</h3>
                    <p>
                      Learn how list your NFTs for sale and understand the
                      different ways to list.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="browser-cat-card">
                    <img src="assets/img/icon/10.svg" alt="" />

                    <h3>Selling</h3>
                    <p>
                      Learn how to create your very first NFT and how to create
                      your NFT collections.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="browser-cat-card">
                    <img src="assets/img/icon/11.svg" alt="" />

                    <h3>Partners</h3>
                    <p>
                      Learn more about anti-fraud and user safety processes on
                      OpenSea.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="browser-cat-card">
                    <img src="assets/img/icon/12.svg" alt="" />

                    <h3>Developers</h3>
                    <p>
                      Learn how you can partner with us to showcase your NFT
                      drops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
