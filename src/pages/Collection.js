import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CollectionCard from "../components/nftCard/CollectionCard";
function Collection() {
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
              <h2>Collection</h2>
              <div className="page-route">
              <Link to="/">Home</Link>
                <p>/ Page / Collection </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      <div className="inner-page-title cpy-5"></div>
      <div className="profile-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-lg-8 col-md-10">
              <div className="profile-content">
                <div className="profile-img">
                  <img src="assets/img/inner/1.png" alt="" />
                  <span className="pf-check">
                    <i className="icofont-check"></i>
                  </span>
                </div>
                <div className="name-title">
                  <h1 className="profile-name">Nft Marketplace</h1>
                  <p>Created by 051_Hart</p>
                </div>
                <div className="profile-info-box">
                  <ul className="item-info">
                    <li>
                      <span className="item-title">7.2 </span>
                      <span className="item-text">Items</span>
                    </li>
                    <li>
                      <span className="item-title">5.3 </span>
                      <span className="item-text">Owners</span>
                    </li>
                    <li>
                      <span className="item-title">
                        <img src="assets/img/icon/eth.svg" alt="" /> 2.55
                      </span>
                      <span className="item-text">Floor Price</span>
                    </li>
                    <li>
                      <span className="item-title">
                        <img src="assets/img/icon/eth.svg" alt="" /> 17.2 K
                      </span>
                      <span className="item-text">Volume Traded</span>
                    </li>
                  </ul>
                </div>
                <div className="profile-des">
                  <p>
                    Habitant sollicitudin faucibus cursus lectus pulvinar dolor
                    non ultrices eget. Facilisi lobortisal morbi fringilla urna
                    amet sed ipsum vitae malesuada. Habitant sollicitudin
                    faucibus cursus lectus pulvinar dolor non ultrices eget.
                    Facilisi lobortisal morbi fringilla urna amet sed ipsum
                    vitae malesuada.
                  </p>
                  <ul className="social-ul justify-content-center">
                    <li>
                      <a href="" className="social-link">
                        <i className="icofont-ui-love"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="social-link">
                        <i className="icofont-share"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="social-link">
                        <i className="icofont-navigation-menu"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="item-bar">
            <div className="row">
              <ul className="item-ul">
                <li className="active">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8333 17.5V9.16667H17.5V17.5H10.8333ZM2.5 10.8333V2.5H9.16667V10.8333H2.5ZM7.5 9.16667V4.16667H4.16667V9.16667H7.5ZM2.5 17.5V12.5H9.16667V17.5H2.5ZM4.16667 15.8333H7.5V14.1667H4.16667V15.8333ZM12.5 15.8333H15.8333V10.8333H12.5V15.8333ZM10.8333 2.5H17.5V7.5H10.8333V2.5ZM12.5 4.16667V5.83333H15.8333V4.16667H12.5Z"
                      fill="#7D7F96"
                    />
                  </svg>

                  <p>Items</p>
                </li>
                <li>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33366 4.16667V15.8333H16.667V4.16667H3.33366ZM2.50033 2.5H17.5003C17.7213 2.5 17.9333 2.5878 18.0896 2.74408C18.2459 2.90036 18.3337 3.11232 18.3337 3.33333V16.6667C18.3337 16.8877 18.2459 17.0996 18.0896 17.2559C17.9333 17.4122 17.7213 17.5 17.5003 17.5H2.50033C2.27931 17.5 2.06735 17.4122 1.91107 17.2559C1.75479 17.0996 1.66699 16.8877 1.66699 16.6667V3.33333C1.66699 3.11232 1.75479 2.90036 1.91107 2.74408C2.06735 2.5878 2.27931 2.5 2.50033 2.5V2.5ZM12.3278 8.16083L10.8337 6.66667H15.0003V10.8333L13.5062 9.33917L10.2862 12.5592L8.51866 10.7917L6.16116 13.1483L4.98283 11.97L8.51866 8.43417L10.2862 10.2025L12.3278 8.16083Z"
                      fill="#7D7F96"
                    />
                  </svg>

                  <p>Activity</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-5">
            <div className="row">
              <div className="col-12">
                <div className="tranding-bar">
                  <ul className="tranding-cat">
                    <li>
                      <a href="" className="tranding-cat-lin">
                        All
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-music-alt"></i> Music
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-world"></i> Virtual World
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-color-bucket"></i> Art
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-ui-camera"></i> Photography
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-downloaded"></i> Domain
                      </a>
                    </li>
                    <li>
                      <a href="" className="tranding-cat-lin">
                        <i className="icofont-book-mark"></i> Collectibles
                      </a>
                    </li>
                  </ul>
                  <div className="added-btn">
                    <div className="dp-menu-item">
                      <div className="dp-fiexd">
                        <p>Recently Added</p>
                        <span>
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="dp-menu">
                        <ul className="dp-ul">
                          <li className="dp-li">
                            <a href="" className="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                          <li className="dp-li">
                            <a href="" className="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                          <li className="dp-li">
                            <a href="" className="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                          <li className="dp-li">
                            <a href="" className="dp-link">
                              Dropdown Menu
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* // ==============expolor product============= */}
          <div className="expolor-product cpb-6">
            <div className="container">
              <div className="row mt-5"> 
              <CollectionCard/>          
              </div>
            </div>
          </div>
          {/* // ==============expolor product============= */}
        </div>
      </div>
    </>
  );
}

export default Collection;
