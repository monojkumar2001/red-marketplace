import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Footer() {
  return (
    <footer>
      <div className="footer-sec cpt-6">
        <div className="container">
          <div className="top-footer mb-3">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <img
                      src="assets/img/logo/logo-2.png"
                      alt="Image not found"
                    />
                  </div>
                  <p className="footer-des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis{" "}
                  </p>

                  <div className="social">
                    <ul className="social-ul">
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
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="social-link">
                          <i className="icofont-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">My Account</h3>
                  </div>
                  <ul class="footer-menu">
                    <li class="footer-list">
                      <Link to="/author">
                        <a href="" class="footer-link">
                          Authors
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/collection">
                        <a href="" class="footer-link">
                        Collection 
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/collection-create">
                        <a href="" class="footer-link">
                        Create  Collection 
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/item-create">
                        <a href="" class="footer-link">
                          Create Items
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">Resources</h3>
                  </div>
                  <ul class="footer-menu">
                    <li class="footer-list">
                      <Link to="/help">
                        <a href="" class="footer-link">
                          Help & Support
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/action">
                        <a href="" class="footer-link">
                          Live Auctions
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/item">
                        <a href="" class="footer-link">
                          Item Details
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/activity">
                        <a href="" class="footer-link">
                          Activity
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">Company</h3>
                  </div>
                  <ul class="footer-menu">
                    <li class="footer-list">
                      <Link to="">
                        <a href="" class="footer-link">
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="/contact">
                        <a href="" class="footer-link">
                          Contact Us
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <Link to="">
                        <a href="" class="footer-link">
                          Our Blog
                        </a>
                      </Link>
                    </li>
                    <li class="footer-list">
                      <a href="" class="footer-link">
                        Discover
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 mb-4 col-sm-6">
                <div className="foot-content">
                  <div className="footer-title">
                    <h3 className="f-title">Newsletter</h3>
                  </div>
                  <p className="footer-des">
                    Fill their seed open meat. Sea you great Saw image stl
                  </p>

                  <div className="search-box">
                    <form method="post" className="subscribe-box">
                      <input
                        type="text"
                        className="form-control subscribe"
                        placeholder="Search..."
                      />
                      <button className="subscribe-btn" type="submit">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.2631 1.82405C3.5333 1.6293 3.89351 1.61414 4.17911 1.78551L16.6791 9.2855C16.9301 9.43611 17.0837 9.70736 17.0837 10.0001C17.0837 10.2928 16.9301 10.5641 16.6791 10.7147L4.17911 18.2147C3.89351 18.386 3.5333 18.3709 3.2631 18.1761C2.99291 17.9814 2.86462 17.6444 2.93687 17.3193L4.37818 10.8334L8.75033 10.8334C9.21056 10.8334 9.58366 10.4603 9.58366 10.0001C9.58366 9.53984 9.21056 9.16675 8.75033 9.16675L4.37818 9.16675L2.93687 2.68086C2.86462 2.35572 2.99291 2.01879 3.2631 1.82405Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copy-right">
            <p className="copy-text">
              Copyright 2021, NFT Constructer All Rights Reserved.
            </p>
            {/* <ul className="f-foot-ul">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
