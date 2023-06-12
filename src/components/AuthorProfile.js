import React from "react";

function AuthorProfile() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Author Profile</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Author Profile </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}

      {/* ========================author profile========================= */}
      <section className="author-profile-section cpt-6">
        <div className="container">
          <div className="author-profile-top">
            <div className="card-top-inner">
              <div className="row">
                <div className="col-xl-6 col-lg-8 ">
                  <div className="author-profile-top-left">
                    <div className="author-profile-top-left-img">
                      <img
                        src="assets/img/author/1.png"
                        alt="image not found"
                      />
                    </div>
                    <div className="author-profile-top-left-content">
                      <p className="p-title">Author Profile</p>
                      <h2>Trista Francis</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laborum obcaecati dignissimos quae quo ad iste
                        ipsum officiis deleniti asperiores sit.
                      </p>

                      <div className="wollate-link">
                        <a href="">
                          DdzFFzCqrhshMSx....
                          <i className="icofont-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4 ">
                  <div className="author-profile-top-right">
                    <div className="author-social">
                      <ul className="author-social-ul">
                        <li>
                          <a href="" className="social-link">
                            <i className="icofont-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="icofont-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="icofont-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="" className="social-link">
                            <i className="icofont-twitch"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="" className="custom-btn">
                      <span>Follow</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="about-menu-bar">
                <ul className="author-menu-ul">
                  <li>
                    <a href="" className="author-menu-link active">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="" className="author-menu-link">
                      art
                    </a>
                  </li>
                  <li>
                    <a href="" className="author-menu-link">
                      music
                    </a>
                  </li>
                  <li>
                    <a href="" className="author-menu-link">
                      collectibles
                    </a>
                  </li>
                  <li>
                    <a href="" className="author-menu-link">
                      sports
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // ==============expolor product============= */}
      <div className="expolor-product cpb-6">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/1.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/7.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/2.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/8.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/3.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/8.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/4.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/10.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/1.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/7.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/2.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/8.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/3.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/8.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-12 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/4.png"
                      alt=""
                      className="product"
                    />
                  </a>

                  <a href="" className="like-btn">
                    <i className="icofont-ui-love"></i> 160
                  </a>
                  <a href="" className="bid-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <span>Place Bid</span>
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Hamlet Contemplates ...
                      </a>
                      <p className="token-type">BSC</p>
                    </div>
                  </div>

                  <div className="buy-like">
                    <div className="author-info">
                      <img
                        src="assets/img/inner/10.jpg"
                        alt=""
                        className="author-img"
                      />
                      <div className="author-name-type">
                        <p className="author-type">Creator</p>
                        <a href="" className="creator-profile">
                          SalvadorDali
                        </a>
                      </div>
                    </div>
                    <div className="price-area">
                      <p className="price-type">Current Bid</p>
                      <p className="price"> 4.89 eTH</p>
                    </div>
                  </div>
                  <div className="bid-btn-history">
                    <a href="" className="bid-btn-l">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8761 4.39163H13.0558C15.4172 4.39163 17.3337 6.26663 17.3337 8.56663V13.1666C17.3337 15.4666 15.4172 17.3333 13.0558 17.3333H4.94488C2.58349 17.3333 0.666992 15.4666 0.666992 13.1666V8.56663C0.666992 6.26663 2.58349 4.39163 4.94488 4.39163H5.12456C5.14167 3.39163 5.54379 2.45829 6.27103 1.75829C7.00683 1.04996 7.94797 0.691626 9.00888 0.666626C11.1307 0.666626 12.8504 2.33329 12.8761 4.39163ZM7.1694 2.64996C6.69028 3.11663 6.42505 3.73329 6.40794 4.39163H11.5927C11.5671 3.02496 10.4206 1.91663 9.00889 1.91663C8.3501 1.91663 7.66564 2.17496 7.1694 2.64996ZM12.2515 7.59996C12.6108 7.59996 12.8932 7.31662 12.8932 6.97496V6.00829C12.8932 5.66663 12.6108 5.38329 12.2515 5.38329C11.9007 5.38329 11.6098 5.66663 11.6098 6.00829V6.97496C11.6098 7.31662 11.9007 7.59996 12.2515 7.59996ZM6.31379 6.97496C6.31379 7.31663 6.03145 7.59996 5.6721 7.59996C5.32132 7.59996 5.03042 7.31663 5.03042 6.97496V6.00829C5.03042 5.66663 5.32132 5.38329 5.6721 5.38329C6.03145 5.38329 6.31379 5.66663 6.31379 6.00829V6.97496Z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <span>Place Bid</span>
                    </a>
                    <a href="" className="history-btn">
                      <i className="icofont-refresh"></i> View History
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // ==============expolor product============= */}
    </>
  );
}

export default AuthorProfile;
