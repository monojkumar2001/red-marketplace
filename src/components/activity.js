import { Link } from "react-router-dom";

function Activity() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Activity</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Activity </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
        <!-- =============page banner end================ -->*/}
      {/* ====================top collection=================== */}
      <div className="activity-wrapper cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="activity-post">
                <ul className="activity-ul">
                  <li className="activity-li">
                    <div className="activity-details">
                      <div className="activity-img">
                        <img src="assets/img/product/1.png" alt="activity-1" />
                      </div>
                      <div className="activity-content">
                        <h3>Monica Lucas</h3>
                        <p>
                          started following <a href=""> Gayle Hicks</a>
                        </p>
                        <p className="activity-date">
                          At 2:30 PM on 19th June, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="activity-li">
                    <div className="activity-details">
                      <div className="activity-img">
                        <img src="assets/img/product/1.png" alt="activity-1" />
                      </div>
                      <div className="activity-content">
                        <h3>Monica Lucas</h3>
                        <p>
                          started following <a href=""> Gayle Hicks</a>
                        </p>
                        <p className="activity-date">
                          At 2:30 PM on 19th June, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="activity-li">
                    <div className="activity-details">
                      <div className="activity-img">
                        <img src="assets/img/product/1.png" alt="activity-1" />
                      </div>
                      <div className="activity-content">
                        <h3>Monica Lucas</h3>
                        <p>
                          started following <a href=""> Gayle Hicks</a>
                        </p>
                        <p className="activity-date">
                          At 2:30 PM on 19th June, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="activity-li">
                    <div className="activity-details">
                      <div className="activity-img">
                        <img src="assets/img/product/1.png" alt="activity-1" />
                      </div>
                      <div className="activity-content">
                        <h3>Monica Lucas</h3>
                        <p>
                          started following <a href=""> Gayle Hicks</a>
                        </p>
                        <p className="activity-date">
                          At 2:30 PM on 19th June, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="activity-li">
                    <div className="activity-details">
                      <div className="activity-img">
                        <img src="assets/img/product/1.png" alt="activity-1" />
                      </div>
                      <div className="activity-content">
                        <h3>Monica Lucas</h3>
                        <p>
                          started following <a href=""> Gayle Hicks</a>
                        </p>
                        <p className="activity-date">
                          At 2:30 PM on 19th June, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="activity-li">
                    <div className="activity-details">
                      <div className="activity-img">
                        <img src="assets/img/product/1.png" alt="activity-1" />
                      </div>
                      <div className="activity-content">
                        <h3>Monica Lucas</h3>
                        <p>
                          started following <a href=""> Gayle Hicks</a>
                        </p>
                        <p className="activity-date">
                          At 2:30 PM on 19th June, 2021
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="load-more-area mt-4">
                <a href="" className="custom-btn">
                  <span>Load More</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="filter-sidebar">
                <div className="form-filter">
                  <form method="post" className="search-form input-search-from">
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
                <div className="filter-by-tag mt-3">
                  <h3>Filter</h3>
                  <ul className="tag-ul mt-2">
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/sort-descending.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Listings</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/heart.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Like</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/buy.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Purchases</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/discount.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Sales</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/logout.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Transfer</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/star.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Burns</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/credit-card.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Bids</span>
                      </a>
                    </li>
                    <li className="tag-name">
                      <a href="" className="tag-link">
                        {" "}
                        <img
                          src="assets/img/icon/users.svg"
                          alt=""
                          className="tag-img"
                        />{" "}
                        <span>Followings</span>
                      </a>
                    </li>
                  </ul>
                  <a href="" className="filter-clear">
                    Clear All Filters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================top collection end =================== */}
    </>
  );
}

export default Activity;
