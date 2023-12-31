import { Link } from "react-router-dom";
import { useState } from "react";
import ExploreCard from "../components/nftCard/ExploreCard";

function Explore() {
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
    const dueDate = new Date("december 28, 2022 00:00").getTime();
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
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Explore</h2>
              <div className="page-route">
              <Link to="/">Home</Link>
                <p>/ Explore / Explore </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
    <!-- =============page banner end================ -->*/}
      {/* ====================top collection=================== */}
      <div className="top-collection cpt-6">
        <div className="container">
          <div className="row">
            <div className="section-title explore-header-item">
              <div className="filtaring-category">
                <ul className="cat-fil-link">
                  <li className="active">
                    <a href="" className="tag-link">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="" className="tag-link">
                      Art
                    </a>
                  </li>
                  <li>
                    <a href="" className="tag-link">
                      Music
                    </a>
                  </li>
                  <li>
                    <a href="" className="tag-link">
                      Collectibles
                    </a>
                  </li>
                  <li>
                    <a href="" className="tag-link">
                      Sports
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sort-by">
                <div className="filter-btn">
                  <div className="select">
                    <div className="select-menu">
                      <div className="select-menu-inner">
                        <p>All Artworks </p>
                        <i className="icofont-simple-down"></i>
                      </div>
                      <ul className="dp-menu">
                        <li>
                          <a href="" className="dp-link">
                            Abstraction
                          </a>
                        </li>
                        <li>
                          <a href="" className="dp-link">
                            Skecthify
                          </a>
                        </li>
                        <li>
                          <a href="" className="dp-link">
                            Patternlicious
                          </a>
                        </li>
                        <li>
                          <a href="" className="dp-link">
                            Virtuland
                          </a>
                        </li>
                        <li>
                          <a href="" className="dp-link">
                            Papercut
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="filter-btn">
                  <div className="select">
                    <div className="select-menu">
                      <div className="select-menu-inner">
                        <p>Sort by </p>
                        <i className="icofont-simple-down"></i>
                      </div>
                      <ul className="dp-menu">
                        <li>
                          <a href="" className="dp-link">
                            Top rate
                          </a>
                        </li>
                        <li>
                          <a href="" className="dp-link">
                            Mid rate
                          </a>
                        </li>
                        <li>
                          <a href="" className="dp-link">
                            Low rate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-collection-arefa cpy-5">
            <div className="top-collection-slider">
              <div className="row">
               
                <ExploreCard/>
                {/* <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
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
                </div> */}
              </div>

              <div className="load-more-area mt-4">
                <a href="" className="custom-btn">
                  <span>Load More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================top collection end =================== */}
    </>
  );
}

export default Explore;
