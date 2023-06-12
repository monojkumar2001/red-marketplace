import React from "react";
import { Link } from "react-router-dom";

function ranking() {
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
                <p>/ Pages / Ranking </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============= Ranking =========== */}
      <div className="ranking cpy-6">
        <div className="container">
          <div className="ranking-wrapper">
            <div className="ranking-header-btn-item">
              <div className="ranking-btns-item-left">
                <a href="" className="custom-btn">
                  <span>All Categories</span>
                </a>
                <a href="" className="custom-btn">
                  <span>All Chains</span>
                </a>
              </div>
              <div className="ranking-btns-item-right">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Last 7 days</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Collection</th>
                    <th scope="col">Volume</th>
                    <th scope="col">24 %</th>
                    <th scope="col">7d %</th>
                    <th scope="col">Floor Price</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Items</th>
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
                    <td>
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>2K</td>
                    <td>10.5K</td>
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
                    <td>
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>2K</td>
                    <td>10.5K</td>
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
                    <td>
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>2K</td>
                    <td>10.5K</td>
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
                    <td>
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>2K</td>
                    <td>10.5K</td>
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
                    <td>
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="red-vat">
                        <span> -35.75%</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="collection-price">
                        <div className="ethereum-logo">
                          <img
                            src="../assets/img/icon/Ethereum-icon.svg"
                            alt=""
                          />
                        </div>
                        <span>30,6453.01</span>
                      </div>
                    </td>
                    <td>2K</td>
                    <td>10.5K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ranking;
