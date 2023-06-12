import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
function User_list() {
  return (
    <>
      <div className="user-admin cpb-7 cpt-7">
        <div className="container-fluid p-0 m-0">
          <div className="user-admin-warrper">
            <Sidebar />

            <div className="user-content">
              <div className="user-header-content">
                <div className="user-content-left">
                  <span>Good Morning Akash!</span>
                </div>
                <div className="user-content-right">
                  <div className="user-content-left-site">
                    <button className="creator">Creator</button>
                    <span>Collector</span>
                  </div>
                  <div className="user-content-right-site">
                    <div className="user-setting">
                      <a href="">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 27 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27 11.4282C26.5599 11.6848 26.1936 12.0582 25.9388 12.5102C25.684 12.9622 25.5498 13.4764 25.5501 14C25.5501 15.1046 26.1347 16.0664 27 16.5718L26.0321 19.9402C25.5089 19.8469 24.9709 19.9074 24.4792 20.1149C23.9875 20.3224 23.5616 20.6686 23.2499 21.1143C22.9382 21.5599 22.7531 22.0872 22.7156 22.6364C22.6781 23.1856 22.7897 23.7346 23.0378 24.2214L20.2541 26.4642C19.8855 26.1509 19.4469 25.9388 18.9786 25.8474C18.5102 25.756 18.0273 25.7883 17.5741 25.9413C17.121 26.0942 16.7122 26.363 16.3855 26.7227C16.0588 27.0825 15.8246 27.5217 15.7046 28L11.2631 27.9888C11.1417 27.5128 10.9072 27.076 10.581 26.7183C10.2548 26.3605 9.84743 26.0933 9.39598 25.9409C8.94454 25.7886 8.46348 25.756 7.99677 25.8462C7.53006 25.9364 7.09259 26.1465 6.72435 26.4572L3.94335 24.1962C4.18442 23.7114 4.29104 23.1668 4.25134 22.6229C4.21164 22.0791 4.02717 21.5573 3.71847 21.1157C3.40978 20.6741 2.98896 20.33 2.50287 20.1217C2.01678 19.9135 1.48449 19.8492 0.96525 19.936L0 16.555C0.431931 16.2957 0.790444 15.9231 1.0395 15.4746C1.28856 15.0261 1.4194 14.5176 1.41885 14C1.41885 12.908 0.8505 11.956 0 11.445L0.96525 8.064C1.48459 8.15115 2.01707 8.08708 2.50337 7.87892C2.98967 7.67077 3.41071 7.32671 3.71959 6.88506C4.02846 6.4434 4.21306 5.9215 4.2528 5.37748C4.29255 4.83346 4.18589 4.28867 3.9447 3.8038L6.723 1.5428C7.09124 1.85353 7.52871 2.06359 7.99542 2.15378C8.46213 2.24396 8.94319 2.21139 9.39463 2.05905C9.84608 1.90671 10.2535 1.63946 10.5797 1.28172C10.9058 0.923974 11.1403 0.487159 11.2617 0.0112L15.7059 0C15.826 0.478252 16.0601 0.917487 16.3869 1.27726C16.7136 1.63703 17.1223 1.90578 17.5755 2.05875C18.0286 2.21172 18.5116 2.244 18.9799 2.15261C19.4482 2.06122 19.8869 1.84911 20.2554 1.5358L23.0364 3.78C22.7884 4.26676 22.6768 4.81584 22.7143 5.36501C22.7518 5.91418 22.9369 6.44148 23.2486 6.88714C23.5603 7.3328 23.9861 7.679 24.4778 7.88651C24.9696 8.09402 25.5075 8.15454 26.0307 8.0612L27 11.4268V11.4282ZM20.0111 5.152C20.0111 5.0638 20.0138 4.977 20.0178 4.8888L19.9098 4.802C18.8583 5.09907 17.7456 5.06785 16.7111 4.71223C15.6766 4.35662 14.7662 3.69242 14.094 2.8028L12.8736 2.8056C12.2039 3.69144 11.2978 4.35353 10.2681 4.70948C9.23833 5.06544 8.13039 5.09956 7.0821 4.8076L6.95385 4.914C7.00469 6.17775 6.65238 7.42363 5.95147 8.45876C5.25056 9.49389 4.24014 10.2605 3.07665 10.64C3.75545 11.6183 4.12008 12.7934 4.11885 13.9986C4.11885 15.2334 3.74085 16.3996 3.07665 17.3586C4.24014 17.7381 5.25056 18.5047 5.95147 19.5398C6.65238 20.575 7.00469 21.8209 6.95385 23.0846L7.08345 23.1896C8.13158 22.8987 9.23901 22.9333 10.2683 23.2892C11.2976 23.6451 12.2035 24.3066 12.8736 25.1916L14.094 25.1944C14.7658 24.3046 15.6759 23.6402 16.7102 23.2846C17.7446 22.929 18.8571 22.8979 19.9084 23.1952L20.0164 23.1084C19.9608 21.8407 20.3111 20.5896 21.0126 19.5498C21.7141 18.5101 22.7276 17.7402 23.895 17.36C23.2156 16.3814 22.8505 15.2058 22.8514 14C22.8514 12.7652 23.2308 11.5976 23.895 10.64C22.7691 10.2729 21.7854 9.54293 21.0872 8.55617C20.3889 7.56941 20.0124 6.37736 20.0124 5.1534L20.0111 5.152ZM13.5 19.6C12.0678 19.6 10.6943 19.01 9.68162 17.9598C8.66893 16.9096 8.1 15.4852 8.1 14C8.1 12.5148 8.66893 11.0904 9.68162 10.0402C10.6943 8.99 12.0678 8.4 13.5 8.4C14.9322 8.4 16.3057 8.99 17.3184 10.0402C18.3311 11.0904 18.9 12.5148 18.9 14C18.9 15.4852 18.3311 16.9096 17.3184 17.9598C16.3057 19.01 14.9322 19.6 13.5 19.6ZM13.5 16.8C14.2161 16.8 14.9028 16.505 15.4092 15.9799C15.9155 15.4548 16.2 14.7426 16.2 14C16.2 13.2574 15.9155 12.5452 15.4092 12.0201C14.9028 11.495 14.2161 11.2 13.5 11.2C12.7839 11.2 12.0972 11.495 11.5908 12.0201C11.0845 12.5452 10.8 13.2574 10.8 14C10.8 14.7426 11.0845 15.4548 11.5908 15.9799C12.0972 16.505 12.7839 16.8 13.5 16.8Z"
                            fill="#131736"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="user-notification">
                      <a href="">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.2213 18.376L21.3333 17.5813V10.6667C21.3333 9.25217 20.7714 7.89561 19.7712 6.89542C18.771 5.89523 17.4145 5.33332 16 5.33332C14.5855 5.33332 13.229 5.89523 12.2288 6.89542C11.2286 7.89561 10.6667 9.25217 10.6667 10.6667V17.5813L9.77867 18.376C8.49007 19.5259 7.5465 21.0115 7.05334 22.6667H24.9467C24.4535 21.0115 23.5099 19.5259 22.2213 18.376ZM20 25.3333C20 26.3942 19.5786 27.4116 18.8284 28.1617C18.0783 28.9119 17.0609 29.3333 16 29.3333C14.9391 29.3333 13.9217 28.9119 13.1716 28.1617C12.4214 27.4116 12 26.3942 12 25.3333H4.00001C3.99819 23.6447 4.35366 21.9748 5.04305 20.4333C5.73244 18.8919 6.74016 17.5137 8.00001 16.3893V10.6667C8.00001 8.54492 8.84286 6.51009 10.3432 5.0098C11.8434 3.50951 13.8783 2.66666 16 2.66666C18.1217 2.66666 20.1566 3.50951 21.6569 5.0098C23.1572 6.51009 24 8.54492 24 10.6667V16.3893C25.2599 17.5137 26.2676 18.8919 26.957 20.4333C27.6464 21.9748 28.0018 23.6447 28 25.3333H20ZM16 26.6667C16.3536 26.6667 16.6928 26.5262 16.9428 26.2761C17.1929 26.0261 17.3333 25.6869 17.3333 25.3333H14.6667C14.6667 25.6869 14.8071 26.0261 15.0572 26.2761C15.3072 26.5262 15.6464 26.6667 16 26.6667Z"
                            fill="#131736"
                          />
                        </svg>
                        <div className="notification-count">
                          <span>+6</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recent-bids-header user-list-header">
                <div className="recent-head-title">
                  <h2>List Users</h2>
                </div>
                <div className="user-list-all-items">
                  <div className="list-user-item-btn">
                    <button className="custom-btn">
                      <span>From</span>
                    </button>
                  </div>
                  <div className="list-user-item-btn">
                    <button className="custom-btn">
                      <span>To</span>
                    </button>
                  </div>
                  <div className="recent-select-item user-list-select-item">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>select Option</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="list-search-btn">
                    <button className="custom-btn">
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="recent-bids-table cpy-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Owner</th>
                        <th scope="col">NFTs Sold</th>
                        <th scope="col">Primary Sales</th>
                        <th scope="col">Secondary Sales</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="recent-item-list">
                            <div className="list-rank-count">
                              <span>X1</span>
                            </div>
                            <div className="item-list-left">
                              <img src="./assets/img/action/3.png" alt="" />
                            </div>
                            <div className="item-list-right">
                              <h4>Sacral Metatron</h4>
                              <p>Hannah Zeo</p>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1.003 ETH</td>
                        <td>0.03 ETH</td>
                        <td>17.00 ETH</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="recent-item-list">
                            <div className="list-rank-count">
                              <span>X1</span>
                            </div>
                            <div className="item-list-left">
                              <img src="./assets/img/action/3.png" alt="" />
                            </div>
                            <div className="item-list-right">
                              <h4>Sacral Metatron</h4>
                              <p>Hannah Zeo</p>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1.003 ETH</td>
                        <td>0.03 ETH</td>
                        <td>17.00 ETH</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="recent-item-list">
                            <div className="list-rank-count">
                              <span>X1</span>
                            </div>
                            <div className="item-list-left">
                              <img src="./assets/img/action/3.png" alt="" />
                            </div>
                            <div className="item-list-right">
                              <h4>Sacral Metatron</h4>
                              <p>Hannah Zeo</p>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1.003 ETH</td>
                        <td>0.03 ETH</td>
                        <td>17.00 ETH</td>
                      </tr>

                      <tr>
                        <td>
                          <div className="recent-item-list">
                            <div className="list-rank-count">
                              <span>X1</span>
                            </div>
                            <div className="item-list-left">
                              <img src="./assets/img/action/3.png" alt="" />
                            </div>
                            <div className="item-list-right">
                              <h4>Sacral Metatron</h4>
                              <p>Hannah Zeo</p>
                            </div>
                          </div>
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1.003 ETH</td>
                        <td>0.03 ETH</td>
                        <td>17.00 ETH</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="list-read-more">
                <a href="" className="custom-btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User_list;
