import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
function Home() {
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

  setInterval(countDown, 1000);
  return (
    // <!-- ====================Banner================= -->
    <>
      <div className="banner">
        <div className="banner-content-wrap">
          <div className="banner-content-wrapper">
            <div className="banner-content">
              {/* <h4 className="sm-title">Buying  Selling NFT World</h4> */}
              <h1 className="banner-title">
                Discover, collect, and sell extraordinary NFTs
              </h1>
              <p className="banner-des">
                Marketplace for monster character cllections non fungible token
                NFTs
              </p>

              <div className="banner-button-area">
                <a href="" className="custom-btn me-2">
                  <span>Explore More</span>
                </a>
                <a href="" className="custom-btn-alt">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================Banner end================= --> */}
      {/* // ==============expolor product============= */}
      <div className="expolor-product">
        <div className="container">
          <div className="row">
            <div className="brand-logo">
              <img src="assets/img/banner/1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* // ==============expolor product============= */}
      {/* // ==============expolor product============= */}
      <div className="expolor-product">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="title-content">
                <h2>Live Auctions</h2>
                <p>Most popular gaming digital nft market place </p>
              </div>
              <div className="slider-nav">
                <div className="prev">
                  <i className="icofont-arrow-left"></i>
                </div>
                <div className="next">
                  <i className="icofont-arrow-right"></i>
                </div>
              </div>
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
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
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
                            src="assets/img/inner/12.jpg"
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

      {/* =========== How It work ============= */}
      <div className="work cpt-6">
        <div className="container">
          <div className="row g-4">
            <div className="section-title">
              <h2>How It Work</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-item">
                <div className="card-head">
                  <div className="card-head-img">
                    <img
                      src="assets/img/work/1.svg"
                      alt=""
                      className="work-img"
                    />
                  </div>
                  <span>01</span>
                </div>
                <div className="card-content">
                  <h4>Set your wallet</h4>
                  <p>
                    Decide which wallet you want to use as your transaction
                    method
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-item">
                <div className="card-head">
                  <div className="card-head-img">
                    <img
                      src="assets/img/work/2.svg"
                      alt=""
                      className="work-img"
                    />
                  </div>
                  <span>02</span>
                </div>
                <div className="card-content">
                  <h4>Add your NFT's</h4>
                  <p>
                    If you are a creator/designer, you can add your NFTs to the
                    display
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-item">
                <div className="card-head">
                  <div className="card-head-img">
                    <img
                      src="assets/img/work/3.svg"
                      alt=""
                      className="work-img"
                    />
                  </div>
                  <span>03</span>
                </div>
                <div className="card-content">
                  <h4>Buy/Sell your Collection/NFT's</h4>
                  <p>
                    You can buy the NFTs you like or sell your NFTs to earn some
                    cash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // ==============expolor product============= */}
      <div className="expolor-product cpy-6">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Today's Picks</h2>
            </div>
          </div>
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
      {/* // ==============expolor product============= */}
      <div className="expolor-product cpb-6 Latest-collection">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <div className="title-content">
                <h2>Live Auctions</h2>
                <p>Most popular gaming digital nft market place </p>
              </div>
              <div className="slider-nav">
                <div className="prev">
                  <i className="icofont-arrow-left"></i>
                </div>
                <div className="next">
                  <i className="icofont-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service-boxes">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                breakpoints={{
                  450: {
                    slidesPerView: 1,
                  },
                  680: {
                    slidesPerView: 1.5,
                  },
                  1050: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="card-details">
                    <div className="card">
                      <div className="card-top">
                        <img src="assets/img/inner/19.png" alt="" />
                      </div>
                      <div className="card-mid">
                        <div className="image">
                          <img src="assets/img/inner/8.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/9.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/10.jpg" alt="" />
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="left">
                          <div className="profile">
                            <div className="avatar">
                              <img src="assets/img/inner/12.jpg" alt="" />
                            </div>
                            <div className="checkmark">
                              <i className="fas fa-check-circle"></i>
                            </div>
                          </div>
                          <div className="name">
                            <h1>Creative Art Collection</h1>
                            <div className="creater-in">
                              <p>Created by</p>
                              <p className="creater-title">Ralph Garraway</p>
                            </div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="like">
                            <i className="far fa-heart"></i>
                            <span>100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-details">
                    <div className="card">
                      <div className="card-top">
                        <img src="assets/img/inner/19.png" alt="" />
                      </div>
                      <div className="card-mid">
                        <div className="image">
                          <img src="assets/img/inner/8.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/9.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/10.jpg" alt="" />
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="left">
                          <div className="profile">
                            <div className="avatar">
                              <img src="assets/img/inner/12.jpg" alt="" />
                            </div>
                            <div className="checkmark">
                              <i className="fas fa-check-circle"></i>
                            </div>
                          </div>
                          <div className="name">
                            <h1>Creative Art Collection</h1>
                            <div className="creater-in">
                              <p>Created by</p>
                              <p className="creater-title">Ralph Garraway</p>
                            </div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="like">
                            <i className="far fa-heart"></i>
                            <span>100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-details">
                    <div className="card">
                      <div className="card-top">
                        <img src="assets/img/inner/19.png" alt="" />
                      </div>
                      <div className="card-mid">
                        <div className="image">
                          <img src="assets/img/inner/8.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/9.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/10.jpg" alt="" />
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="left">
                          <div className="profile">
                            <div className="avatar">
                              <img src="assets/img/inner/12.jpg" alt="" />
                            </div>
                            <div className="checkmark">
                              <i className="fas fa-check-circle"></i>
                            </div>
                          </div>
                          <div className="name">
                            <h1>Creative Art Collection</h1>
                            <div className="creater-in">
                              <p>Created by</p>
                              <p className="creater-title">Ralph Garraway</p>
                            </div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="like">
                            <i className="far fa-heart"></i>
                            <span>100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-details">
                    <div className="card">
                      <div className="card-top">
                        <img src="assets/img/inner/19.png" alt="" />
                      </div>
                      <div className="card-mid">
                        <div className="image">
                          <img src="assets/img/inner/8.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/9.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/10.jpg" alt="" />
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="left">
                          <div className="profile">
                            <div className="avatar">
                              <img src="assets/img/inner/12.jpg" alt="" />
                            </div>
                            <div className="checkmark">
                              <i className="fas fa-check-circle"></i>
                            </div>
                          </div>
                          <div className="name">
                            <h1>Creative Art Collection</h1>
                            <div className="creater-in">
                              <p>Created by</p>
                              <p className="creater-title">Ralph Garraway</p>
                            </div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="like">
                            <i className="far fa-heart"></i>
                            <span>100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card-details">
                    <div className="card">
                      <div className="card-top">
                        <img src="assets/img/inner/19.png" alt="" />
                      </div>
                      <div className="card-mid">
                        <div className="image">
                          <img src="assets/img/inner/8.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/9.jpg" alt="" />
                        </div>
                        <div className="image">
                          <img src="assets/img/inner/10.jpg" alt="" />
                        </div>
                      </div>
                      <div className="card-bottom">
                        <div className="left">
                          <div className="profile">
                            <div className="avatar">
                              <img src="assets/img/inner/12.jpg" alt="" />
                            </div>
                            <div className="checkmark">
                              <i className="fas fa-check-circle"></i>
                            </div>
                          </div>
                          <div className="name">
                            <h1>Creative Art Collection</h1>
                            <div className="creater-in">
                              <p>Created by</p>
                              <p className="creater-title">Ralph Garraway</p>
                            </div>
                          </div>
                        </div>
                        <div className="right">
                          <div className="like">
                            <i className="far fa-heart"></i>
                            <span>100</span>
                          </div>
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

      {/* // ==============expolor product============= */}
      <div className="home-author cpy-6">
        <div className="container">
          <div className="row">
            <div className="best-seller-title">
              <div className="section-title">
                <h2>Best Sellers</h2>
                <p>Most popular gaming digital nft market place </p>
              </div>
              <a href="" className="custom-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.875 1.125L1.375 9.46875C0.8125 9.78125 0.875 10.5938 1.4375 10.8125L4.78125 12.2188L13.75 4.3125C13.9062 4.15625 14.1562 4.375 14 4.5625L6.5 13.7188V16.25C6.5 17 7.375 17.2812 7.8125 16.75L9.8125 14.3125L13.6875 15.9688C14.125 16.1562 14.6562 15.875 14.7188 15.375L16.9688 1.875C17.0938 1.25 16.4062 0.8125 15.875 1.125Z"
                    fill="white"
                  />
                </svg>
                <span>Explore More</span>
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-lg-3 col-sm-6 mb-4">
              <div className="tp-collection-card">
                <div className="collection-image">
                  <img src="assets/img/inner/7.jpg" alt="" />

                  <span className="av-mark">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="collection-des">
                  <a href="" className="collection-name">
                    NFT Funny Cat
                  </a>
                  <p className="collection-total-price">7,080.95 ETH</p>
                </div>
                <a href="" className="custom-btn">
                  <span>Follow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
