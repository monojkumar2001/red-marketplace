import React from "react";
import { Link } from "react-router-dom";
import ProperticeAddModel from "./model/ProperticeAddModel";
const Create = () => {
  return (
    <>
      {/*
            <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2> Create </h2>
              <div className="page-route">
                <Link to="/">Home</Link>
                <p>/ Pages / Collection Create</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
            <!-- =============page banner end================ -->*/}
      {/* <!-- ==============profile area========== --> */}
      <div className="profile-area cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-4 col-md-12 mb-4">
              <h4 className="sm-title mb-3">New Collection item</h4>
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/1.png"
                      alt=""
                      className="product"
                    />
                  </a>
                </div>
                <div className="product-des">
                  <div className="name-diamond">
                    <div className="name-cat">
                      <a href="#" className="product-name">
                        "Cyber Doberman #766”
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
            </div>

            <div className="col-lg-6 col-xl-8 col-md-12">
              <h4 className="sm-title mb-3">
                Image, Video, Audio, or 3D Model*
              </h4>
              <span>Drag or choose your file to upload</span>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="profile-image-upload-card">
                    <div className="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-8"
                        className="inputfile"
                        multiple
                      />
                      <label for="file-8">
                        <span className="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-info mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Name</p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Item name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>External link</p>
                      <p className="collection-discription">
                        We will include a link to this URL on this item's detail
                        page, so that users can click to learn more about it.
                        You are welcome to link to your own webpage with more
                        details.
                      </p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="http://yoursite.io/item/123"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Description</p>
                      <p className="collection-discription">
                        The description will be included on the item's detail
                        page underneath its image. Markdown syntax is supported.
                      </p>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="form-control"
                        rows="5"
                        placeholder="Provide a detailed description of your item."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="proper-con">
                      <div className="input-title">
                        <p>
                          <span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_18_423)">
                                <path
                                  d="M5.33333 2.66667H14V4H5.33333V2.66667ZM3.33333 2V4H4V4.66667H2V4H2.66667V2.66667H2V2H3.33333ZM2 9.33333V7.66667H3.33333V7.33333H2V6.66667H4V8.33333H2.66667V8.66667H4V9.33333H2ZM3.33333 13H2V12.3333H3.33333V12H2V11.3333H4V14H2V13.3333H3.33333V13ZM5.33333 7.33333H14V8.66667H5.33333V7.33333ZM5.33333 12H14V13.3333H5.33333V12Z"
                                  fill="#131740"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_18_423">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>{" "}
                          Properties
                        </p>
                        <p className="collection-discription">
                          Textual traits that show up as rectangles.
                        </p>
                      </div>
                     <ProperticeAddModel/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Collection</p>
                      <p className="collection-discription">
                        This is the collection where your item will appear.
                      </p>
                    </div>
                    <div className="mb-3">
                      <select
                        class="form-select form-select-item"
                        aria-label="Default select example"
                      >
                        <option selected>Select collection</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Blockchain</p>
                    </div>
                    <div className="mb-3">
                      <select
                        class="form-select form-select-item"
                        aria-label="Default select example"
                      >
                        <option selected>Ethereum</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Freeze metadata</p>
                      <p className="collection-discription">
                        Freezing your metadata will allow you to permanently
                        lock and store all of this item's content in
                        decentralized file storage.
                      </p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To freeze your metadata, you must create your item first."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==============profile area end========== --> */}
    </>
  );
};

export default Create;
