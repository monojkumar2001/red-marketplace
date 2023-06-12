import { Link } from "react-router-dom";
function Create() {
  return (
    <>
      {/*
            <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Create Item</h2>
              <div className="page-route">
              <Link to="/">Home</Link>
                <p>/ Pages / Create Item </p>
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
            <div className="col-lg-4 col-xl-3 col-md-12 mb-4">
              <h4 className="sm-title mb-3">Preview item</h4>
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

            <div className="col-lg-8 col-xl-9 col-md-12">
              <h4 className="sm-title mb-3">Choice your Cover image</h4>
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
                      <p>Select method</p>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="method-input">
                          <div className="method-btn active">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.7483 18.3066C10.3067 18.3083 9.88167 18.1316 9.57 17.8183L3.03917 11.2891C2.8689 11.1194 2.7375 10.9148 2.65405 10.6893C2.5706 10.4639 2.53709 10.223 2.55584 9.9833L2.97251 4.51164C3.00129 4.11328 3.17294 3.73872 3.45589 3.45685C3.73884 3.17497 4.11405 3.00474 4.5125 2.97747L9.98417 2.5608C10.0275 2.55164 10.07 2.55164 10.1133 2.55164C10.555 2.55164 10.9775 2.72664 11.2883 3.03997L17.82 9.5683C17.9748 9.72308 18.0977 9.90684 18.1815 10.1091C18.2653 10.3113 18.3084 10.5281 18.3084 10.7471C18.3084 10.966 18.2653 11.1828 18.1815 11.385C18.0977 11.5873 17.9748 11.771 17.82 11.9258L11.9267 17.8183C11.7723 17.9736 11.5887 18.0967 11.3864 18.1805C11.1842 18.2643 10.9673 18.3072 10.7483 18.3066ZM7.2125 5.54497C6.93843 5.54505 6.6686 5.61272 6.42692 5.74198C6.18525 5.87124 5.97918 6.05811 5.82697 6.28604C5.67476 6.51396 5.5811 6.7759 5.5543 7.04867C5.5275 7.32143 5.56838 7.59659 5.67332 7.84978C5.77826 8.10297 5.94402 8.32637 6.15592 8.5002C6.36782 8.67403 6.61932 8.79292 6.88813 8.84634C7.15695 8.89976 7.4348 8.88606 7.69706 8.80646C7.95932 8.72685 8.1979 8.5838 8.39167 8.38997L8.3975 8.38497L8.40334 8.37914L8.39667 8.38497C8.62833 8.15127 8.78562 7.85423 8.84873 7.53129C8.91184 7.20834 8.87794 6.87394 8.75131 6.57023C8.62467 6.26651 8.41096 6.00708 8.13712 5.82463C7.86328 5.64218 7.54156 5.54487 7.2125 5.54497Z"
                                fill="#8A8AA0"
                              />
                            </svg>
                            <p>Fixed price</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="method-input">
                          <div className="method-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.99102 1.66675C5.39102 1.66675 1.66602 5.40008 1.66602 10.0001C1.66602 14.6001 5.39102 18.3334 9.99102 18.3334C14.5994 18.3334 18.3327 14.6001 18.3327 10.0001C18.3327 5.40008 14.5994 1.66675 9.99102 1.66675ZM13.3327 13.3334C13.2556 13.4107 13.164 13.472 13.0632 13.5138C12.9624 13.5556 12.8543 13.5771 12.7452 13.5771C12.636 13.5771 12.528 13.5556 12.4272 13.5138C12.3264 13.472 12.2348 13.4107 12.1577 13.3334L9.41602 10.5917C9.33728 10.5146 9.27464 10.4225 9.23172 10.321C9.18881 10.2194 9.16647 10.1103 9.16602 10.0001V6.66675C9.16602 6.20842 9.54102 5.83342 9.99935 5.83342C10.4577 5.83342 10.8327 6.20842 10.8327 6.66675V9.65842L13.3327 12.1584C13.6577 12.4834 13.6577 13.0084 13.3327 13.3334Z"
                                fill="#8A8AA0"
                              />
                            </svg>

                            <p>Time auctions</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="method-input">
                          <div className="method-btn">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6Z"
                                fill="#8A8AA0"
                              />
                              <path
                                d="M18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8Z"
                                fill="#8A8AA0"
                              />
                              <path
                                d="M14 15C14 13.9391 13.5786 12.9217 12.8284 12.1716C12.0783 11.4214 11.0609 11 10 11C8.93913 11 7.92172 11.4214 7.17157 12.1716C6.42143 12.9217 6 13.9391 6 15V18H14V15Z"
                                fill="#8A8AA0"
                              />
                              <path
                                d="M6 8C6 8.53043 5.78929 9.03914 5.41421 9.41421C5.03914 9.78929 4.53043 10 4 10C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6C4.53043 6 5.03914 6.21071 5.41421 6.58579C5.78929 6.96086 6 7.46957 6 8Z"
                                fill="#8A8AA0"
                              />
                              <path
                                d="M16 18.0001V15.0001C16.0014 13.9833 15.7433 12.9831 15.25 12.0941C15.6933 11.9806 16.1568 11.9699 16.6049 12.0628C17.053 12.1557 17.474 12.3497 17.8357 12.63C18.1974 12.9103 18.4903 13.2695 18.6921 13.6803C18.8939 14.091 18.9992 14.5424 19 15.0001V18.0001H16Z"
                                fill="#8A8AA0"
                              />
                              <path
                                d="M4.75 12.094C4.25675 12.9831 3.9986 13.9833 4 15V18H1V15C0.999808 14.5421 1.10446 14.0902 1.30595 13.6789C1.50743 13.2676 1.80039 12.908 2.16238 12.6275C2.52437 12.3469 2.94578 12.153 3.39431 12.0606C3.84284 11.9681 4.30658 11.9796 4.75 12.094Z"
                                fill="#8A8AA0"
                              />
                            </svg>

                            <p>Open for bids</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Price</p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter price for one item (ETH)"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Title</p>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Item Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-title">
                      <p>Description</p>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="form-control"
                        rows="5"
                        placeholder="e.g. “This is very limited item”"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="col-md-12">
                          <div className="input-title">
                            <p>Royalties</p>
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="5%"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="col-md-12">
                          <div className="input-title">
                            <p>Size</p>
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="e.g. “size”"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="col-md-12">
                          <div className="input-title">
                            <p>Size</p>
                          </div>
                          <div className="select-item">
                            <div className="select-menu">
                              <div className="select-menu-inner">
                                <p>All Artworks </p>
                                <i className="icofont-simple-down"></i>
                              </div>
                              <ul className="dp-menu">
                                <li>
                                  <a href="" className="dp-link">
                                    Abstraction
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="dp-link">
                                    Skecthify
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="dp-link">
                                    Patternlicious
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="dp-link">
                                    Virtuland
                                  </a>
                                </li>
                                <li>
                                  <a href="" className="dp-link">
                                    Papercut
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==============profile area end========== --> */}
    </>
  );
}

export default Create;
