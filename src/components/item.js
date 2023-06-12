import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
function Item() {
  // Countdown
  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);

  const [hour1, setHour1] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [hour3, setHour3] = useState(0);

  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);

  // Timer
  const countDown = () => {
    const dueDate = new Date("April 28, 2025 00:00").getTime();
    const currentDate = new Date().getTime();

    const remainings = dueDate - currentDate;

    if (remainings > 0) {
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      // Remainings
      let remainingDay = Math.floor(remainings / day);
      let remainingHour = Math.floor((remainings % day) / hour);
      let remainingMinute = Math.floor((remainings % hour) / minute);
      let remainingSecond = Math.floor((remainings % minute) / second);

      // Day
      let dayLength = remainingDay.toString().length;

      if (dayLength === 1) {
        setDay1(0);
        setDay2(remainingDay);
      } else if (dayLength === 2) {
        remainingDay = remainingDay.toString().split("");

        setDay1(remainingDay[0]);
        setDay2(remainingDay[1]);
      }

      // Hour
      let hourLength = remainingHour.toString().length;

      if (hourLength === 1) {
        setHour1(0);
        setHour2(remainingHour);
      } else if (hourLength === 2) {
        remainingHour = remainingHour.toString().split("");

        setHour1(remainingHour[0]);
        setHour2(remainingHour[1]);
      }

      // Minute
      let minuteLength = remainingMinute.toString().length;

      if (minuteLength === 1) {
        setMinute1(0);
        setMinute2(remainingMinute);
      } else if (minuteLength === 2) {
        remainingMinute = remainingMinute.toString().split("");

        setMinute1(remainingMinute[0]);
        setMinute2(remainingMinute[1]);
      }

      // Second
      let secondLength = remainingSecond.toString().length;

      if (secondLength === 1) {
        setSecond1(0);
        setSecond2(remainingSecond);
      } else if (secondLength === 2) {
        remainingSecond = remainingSecond.toString().split("");

        setSecond1(remainingSecond[0]);
        setSecond2(remainingSecond[1]);
      }
    } else {
      setDay1(0);
      setDay2(0);

      setHour1(0);
      setHour2(0);

      setMinute1(0);
      setMinute2(0);

      setSecond1(0);
      setSecond2(0);
    }
  };

  setInterval(countDown, 1000);
  return (
    <>
      {/*
    <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Item Details</h2>
              <div className="page-route">
                <Link to="/">Home</Link>
                <p> / Explore / Item Details </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
    <!-- =============page banner end================ -->*/}
      {/* <!-- ============feature============== --> */}
      <section className="item cpt-6">
        <div className="container">
          <div className="item-left">
            <div className="item-img">
              <img src="assets/img/collection/1.jpg" alt="" />
            </div>
          </div>
          <div className="item-right">
            <div className="figure-title">
              <div className="title">
                <h1>“The Pretty Fantasy Flower...”</h1>
              </div>
              <div className="view-like">
                <div className="view">
                  <i className="icofont-eye-alt"></i>
                  <span>225</span>
                </div>
                <div className="like">
                  <i className="icofont-heart-alt"></i>
                  <span>100</span>
                </div>
              </div>
            </div>
            <div className="ownership">
              <div className="owner">
                <div className="avatar">
                  <img src="assets/img/inner/7.jpg" alt="" />
                </div>
                <div className="name">
                  <p>Owned By</p>
                  <h1>Ralph Garraway</h1>
                </div>
              </div>
              <div className="owner">
                <div className="avatar">
                  <img src="assets/img/inner/8.jpg" alt="" />
                </div>
                <div className="name">
                  <p>Create By</p>
                  <h1>Freddie Carpenter</h1>
                </div>
              </div>
            </div>
            <div className="description">
              <p>
                Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
                ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed
                ipsum vitae malesuada. Habitant sollicitudin faucibus cursus
                lectus pulvinar dolor non ultrices eget. Facilisi lobortisal
              </p>
            </div>
            <div className="item-info">
              <div className="figure-left">
                <ul>
                  <li>
                    <span>Artist : </span> Ralph Garraway
                  </li>
                  <li>
                    <span>Size : </span> 3000 x 3000
                  </li>
                  <li>
                    <span>Create : </span> 04 April , 2021
                  </li>
                  <li>
                    <span>Collection : </span> Cyberpunk City Art
                  </li>
                </ul>
              </div>
              <div className="figure-right">
                <div className="bid">
                  <div className="left">
                    <p>Current Bid</p>
                  </div>
                  <div className="right">
                    <h1>
                      4.89 eTH <span>= $12.246</span>
                    </h1>
                  </div>
                </div>
                <div className="timer">
                  <div className="time">
                    <h1>{day1}</h1>
                    <h1>{day2}</h1>
                  </div>
                  <div className="clone">
                    <span>:</span>
                  </div>
                  <div className="time">
                    <h1>{hour1}</h1>
                    <h1>{hour2}</h1>
                  </div>
                  <div className="clone">
                    <span>:</span>
                  </div>
                  <div className="time">
                    <h1>{minute1}</h1>
                    <h1>{minute2}</h1>
                  </div>
                  <div className="clone">
                    <span>:</span>
                  </div>
                  <div className="time">
                    <h1>{second1}</h1>
                    <h1>{second2}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-bid">
              <a href="" className="bid-btn-init ">
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
                  ></path>
                </svg>
                <span>Place Bid</span>
              </a>
            </div>
            <div className="bid-history">
              <div className="title">
                <h1>Bid History</h1>
                <div className="underline"></div>
              </div>
              <ul
                className="nav nav-pills mb-3 tab-head"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-btn active"
                    id="pills-owners-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-owners"
                    type="button"
                    role="tab"
                    aria-controls="pills-owners"
                    aria-selected="true"
                  >
                    Owners
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-btn"
                    id="pills-bids-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-bids"
                    type="button"
                    role="tab"
                    aria-controls="pills-bids"
                    aria-selected="false"
                  >
                    Bids
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-btn"
                    id="pills-history-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-history"
                    type="button"
                    role="tab"
                    aria-controls="pills-history"
                    aria-selected="false"
                  >
                    History
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="pills-owners"
                  role="tabpanel"
                  aria-labelledby="pills-owners-tab"
                >
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <div className="bid-author">
                        <div className="author">
                          <div className=" profile-img">
                            <img
                              src="assets/img/inner/15.png"
                              alt="Image not found"
                            />
                            <div className="mark">
                              <i className="icofont-tick-mark"></i>
                            </div>
                          </div>
                          <div className="author-details">
                            <a href="" className="author-link">
                              Psychedelics Anon <span>place a bid</span>
                            </a>
                            <p>8 hours ago</p>
                          </div>
                        </div>
                        <div className="buy-rate">
                          <p className="price-bid">4.89 ETH </p>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="bid-author">
                        <div className="author">
                          <div className=" profile-img">
                            <img
                              src="assets/img/inner/15.png"
                              alt="Image not found"
                            />
                            <div className="mark">
                              <i className="icofont-tick-mark"></i>
                            </div>
                          </div>
                          <div className="author-details">
                            <a href="" className="author-link">
                              Psychedelics Anon <span>place a bid</span>
                            </a>
                            <p>8 hours ago</p>
                          </div>
                        </div>
                        <div className="buy-rate">
                          <p className="price-bid">4.89 ETH </p>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-bids"
                  role="tabpanel"
                  aria-labelledby="pills-bids-tab"
                >
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <div className="bid-author">
                        <div className="author">
                          <div className=" profile-img">
                            <img
                              src="assets/img/inner/15.png"
                              alt="Image not found"
                            />
                            <div className="mark">
                              <i className="icofont-tick-mark"></i>
                            </div>
                          </div>
                          <div className="author-details">
                            <a href="" className="author-link">
                              Psychedelics Anon <span>place a bid</span>
                            </a>
                            <p>8 hours ago</p>
                          </div>
                        </div>
                        <div className="buy-rate">
                          <p className="price-bid">4.89 ETH </p>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="bid-author">
                        <div className="author">
                          <div className=" profile-img">
                            <img
                              src="assets/img/inner/15.png"
                              alt="Image not found"
                            />
                            <div className="mark">
                              <i className="icofont-tick-mark"></i>
                            </div>
                          </div>
                          <div className="author-details">
                            <a href="" className="author-link">
                              Psychedelics Anon <span>place a bid</span>
                            </a>
                            <p>8 hours ago</p>
                          </div>
                        </div>
                        <div className="buy-rate">
                          <p className="price-bid">4.89 ETH </p>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-history"
                  role="tabpanel"
                  aria-labelledby="pills-history-tab"
                >
                  <div className="row">
                    <div className="col-sm-12 mb-3">
                      <div className="bid-author">
                        <div className="author">
                          <div className=" profile-img">
                            <img
                              src="assets/img/inner/15.png"
                              alt="Image not found"
                            />
                            <div className="mark">
                              <i className="icofont-tick-mark"></i>
                            </div>
                          </div>
                          <div className="author-details">
                            <a href="" className="author-link">
                              Psychedelics Anon <span>place a bid</span>
                            </a>
                            <p>8 hours ago</p>
                          </div>
                        </div>
                        <div className="buy-rate">
                          <p className="price-bid">4.89 ETH </p>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="bid-author">
                        <div className="author">
                          <div className=" profile-img">
                            <img
                              src="assets/img/inner/15.png"
                              alt="Image not found"
                            />
                            <div className="mark">
                              <i className="icofont-tick-mark"></i>
                            </div>
                          </div>
                          <div className="author-details">
                            <a href="" className="author-link">
                              Psychedelics Anon <span>place a bid</span>
                            </a>
                            <p>8 hours ago</p>
                          </div>
                        </div>
                        <div className="buy-rate">
                          <p className="price-bid">4.89 ETH </p>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============feature end============== --> */}
      {/* // ==============expolor product============= */}
      <div className="expolor-product cpy-6">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Live Auctions</h2>
              <a href="" className="see-more-btn">
                Explore more
              </a>
            </div>
          </div>
          <div className="row">
            <div className="service-boxes">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={{
                  450: {
                    slidesPerView: 1.4,
                  },
                  680: {
                    slidesPerView: 2,
                  },
                  1050: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="product-card">
                    <div className="product-image">
                      <a href="" className="product-link">
                        <img
                          src="assets/img/product/1.png"
                          alt=""
                          className="product"
                        />
                      </a>
                      <div className="coutn-timer">
                        <div className="count-part">
                          <span>{day1}</span>
                          <span>{day2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{hour1}</span>
                          <span>{hour2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{minute1}</span>
                          <span>{minute2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{second1}</span>
                          <span>{second2}</span>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card">
                    <div className="product-image">
                      <a href="" className="product-link">
                        <img
                          src="assets/img/product/2.png"
                          alt=""
                          className="product"
                        />
                      </a>
                      <div className="coutn-timer">
                        <div className="count-part">
                          <span>{day1}</span>
                          <span>{day2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{hour1}</span>
                          <span>{hour2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{minute1}</span>
                          <span>{minute2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{second1}</span>
                          <span>{second2}</span>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card">
                    <div className="product-image">
                      <a href="" className="product-link">
                        <img
                          src="assets/img/product/3.png"
                          alt=""
                          className="product"
                        />
                      </a>
                      <div className="coutn-timer">
                        <div className="count-part">
                          <span>{day1}</span>
                          <span>{day2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{hour1}</span>
                          <span>{hour2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{minute1}</span>
                          <span>{minute2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{second1}</span>
                          <span>{second2}</span>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card">
                    <div className="product-image">
                      <a href="" className="product-link">
                        <img
                          src="assets/img/product/4.png"
                          alt=""
                          className="product"
                        />
                      </a>
                      <div className="coutn-timer">
                        <div className="count-part">
                          <span>{day1}</span>
                          <span>{day2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{hour1}</span>
                          <span>{hour2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{minute1}</span>
                          <span>{minute2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{second1}</span>
                          <span>{second2}</span>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card">
                    <div className="product-image">
                      <a href="" className="product-link">
                        <img
                          src="assets/img/product/5.png"
                          alt=""
                          className="product"
                        />
                      </a>
                      <div className="coutn-timer">
                        <div className="count-part">
                          <span>{day1}</span>
                          <span>{day2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{hour1}</span>
                          <span>{hour2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{minute1}</span>
                          <span>{minute2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{second1}</span>
                          <span>{second2}</span>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-card">
                    <div className="product-image">
                      <a href="" className="product-link">
                        <img
                          src="assets/img/product/6.png"
                          alt=""
                          className="product"
                        />
                      </a>
                      <div className="coutn-timer">
                        <div className="count-part">
                          <span>{day1}</span>
                          <span>{day2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{hour1}</span>
                          <span>{hour2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{minute1}</span>
                          <span>{minute2}</span>
                        </div>
                        <span>:</span>
                        <div className="count-part">
                          <span>{second1}</span>
                          <span>{second2}</span>
                        </div>
                      </div>

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
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* // ==============expolor product============= */}
    </>
  );
}

export default Item;
