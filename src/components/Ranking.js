import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function Ranking() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const [date, setDate] = React.useState("");

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

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
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      All Categories
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="All Categories"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Art</MenuItem>
                      <MenuItem value={2}>Music</MenuItem>
                      <MenuItem value={3}>Domain Names</MenuItem>
                      <MenuItem value={4}>Virtual World</MenuItem>
                      <MenuItem value={5}>Collectibles</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="ranking-btns-item-right">
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      All Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={date}
                      label="All Categories"
                      onChange={handleChangeDate}
                    >
                      <MenuItem value={1}>Last 7 days</MenuItem>
                      <MenuItem value={2}>Last 24 hours</MenuItem>
                      <MenuItem value={3}>Last 30 days</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
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

export default Ranking;
