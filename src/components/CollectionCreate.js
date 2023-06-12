import { Link } from "react-router-dom";
function CollectionCreate() {
  return (
    <>
      {/*
            <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2> Collection Create </h2>
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
                  {/* <div className="bid-btn-history">
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
                  </div> */}
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
                      The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
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
                      Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.
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
}

export default CollectionCreate;
