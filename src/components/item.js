import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/NftDetails.css";
import "swiper/css/scrollbar";
import { IoMdRefresh, IoIosArrowDown } from "react-icons/io";
import { FiShare,FiActivity } from "react-icons/fi";
import {BiCollection } from "react-icons/bi";
import { FaRegHandPaper } from "react-icons/fa";
import NftTransection from "./ItemsNft/NftTransection";
import TokenDetails from "./ItemsNft/TokenDetails";
import CollectionDetailsItem from "./ItemsNft/CollectionDetailsItem";
function Item() {
  const [toggleActive, setToggleActive] = useState(0);
  const toggleHandle = (index) => {
    setToggleActive(index);
  };
  return (
    <>
      {/*
    <!-- =============page banner==================== -->*/}
      {/* <div className="page-banner">
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
      </div> */}
      {/*
    <!-- =============page banner end================ -->*/}
      {/* <!-- ============feature============== --> */}
      <section className="item cpy-6">
        <div className="container">
          <div className="nft-details-item-con">
            <div className="item-left">
              <div className="item-img">
                <img src="assets/img/collection/1.jpg" alt="" />
              </div>
              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 1
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 1) {
                      setToggleActive();
                    } else {
                      setToggleActive(1);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                    <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4C1.45 4 0.979002 3.804 0.587002 3.412C0.195002 3.02 -0.000664969 2.54934 1.69779e-06 2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06C2.55 1.69779e-06 3.021 0.196002 3.413 0.588002C3.805 0.980002 4.00067 1.45067 4 2C4 2.55 3.804 3.021 3.412 3.413C3.02 3.805 2.54934 4.00067 2 4ZM0.500002 18V6H3.5V18H0.500002Z" fill="white"/>
</svg>
                    </span>
                    <span>Token Details</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 1
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                   <TokenDetails/>
                  </div>
                </div>
              </div>
              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 2
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 2) {
                      setToggleActive();
                    } else {
                      setToggleActive(2);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <BiCollection/>
                    </span>
                    <span>Collection Details</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 2
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <CollectionDetailsItem/>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-right">
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
                <div className="nft-items-share">
                  <button className="share-btn">
                    <IoMdRefresh />
                  </button>
                  <button className="share-btn share-btns">
                    <span>
                      <FiShare />
                    </span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
              <div className="description mt-3">
                <h3 className="nft-titile mb-3">Garraway</h3>
                <p>
                  Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                  non ultrices eget. Facilisi lobortisal morbi fringilla urna
                  amet sed ipsum vitae malesuada. Habitant sollicitudin faucibus
                  cursus lectus pulvinar dolor non ultrices eget. Facilisi
                  lobortisal
                  amet sed ipsum vitae malesuada. Habitant sollicitudin faucibus
                  cursus lectus pulvinar dolor non ultrices eget. Facilisi
                  lobortisal
                </p>
              </div>
              <div className="ownership my-3 pb-4">
                <button className="bid-btn-init w-100">
                  <span>Not listed</span>
                </button>
                <button className="bid-btn-init w-100">
                  <span>Make offer</span>
                </button>
              </div>

              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 3
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 3) {
                      setToggleActive();
                    } else {
                      setToggleActive(3);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <FaRegHandPaper />
                    </span>
                    <span>Offer</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 3
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <p>No offers found</p>
                  </div>
                </div>
              </div>
              <div className="nft-toggle-bar">
                <div
                  className={
                    toggleActive === 4
                      ? "nft-toggle-title acitve"
                      : "nft-toggle-title"
                  }
                  onClick={() => {
                    if (toggleActive === 4) {
                      setToggleActive();
                    } else {
                      setToggleActive(4);
                    }
                  }}
                >
                  <div className="nft-items-icon d-flex  gap-3">
                    <span>
                      <FiActivity />
                    </span>
                    <span>Activity</span>
                  </div>
                  <p className="icons">
                    <IoIosArrowDown />
                  </p>
                </div>
                <div
                  className={
                    toggleActive === 4
                      ? "nft-toggle-content active"
                      : "nft-toggle-content"
                  }
                >
                  <div className="nft-content-details">
                    <NftTransection/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ============feature end============== --> */}
      {/* // ==============expolor product============= */}
      {/* <div className="expolor-product cpy-6">
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
      </div> */}
      {/* // ==============expolor product============= */}
    </>
  );
}

export default Item;
