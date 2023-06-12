import React from "react";

function EditProfile() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Edit Profile</h2>
              <div className="page-route">
                <a href="">Home </a>
                <p> / Edit Profile </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      {/* <!-- ==============profile area========== --> */}
      <div className="profile-area cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="product-card">
                <div className="product-image">
                  <a href="" className="product-link">
                    <img
                      src="assets/img/product/2.png"
                      alt=""
                      className="product"
                    />
                  </a>
                </div>
                <div className="product-des">
                  <div className="form-group">
                    <input
                      type="file"
                      name="file-7[]"
                      id="file-8"
                      className="inputfile"
                    />
                    <label for="file-8">
                      <span className="file-up">Upload File</span>
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      name="file-7[]"
                      id="file-8"
                      className="inputfile"
                    />
                    <label for="file-8">
                      <span className="file-up">Upload File</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-9">
              <h4 className="sm-title mb-3">Choice your Cover image</h4>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div className="profile-image-upload-card">
                    <div className="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-8"
                        className="inputfile"
                        multiple=""
                      />
                      <label for="file-8">
                        <span className="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div className="profile-image-upload-card">
                    <div className="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-9"
                        className="inputfile"
                        multiple=""
                      />
                      <label for="file-9">
                        <span className="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                  <div className="profile-image-upload-card">
                    <div className="form-group">
                      <input
                        type="file"
                        name="file-7[]"
                        id="file-10"
                        className="inputfile"
                        multiple=""
                      />
                      <label for="file-10">
                        <span className="archive-name">Upload File</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-info mt-5">
                <div className="row revers">
                  <div className="col-md-6">
                    <h4 className="sm-title mb-3">Account Information</h4>
                    <div className="mb-3">
                      <label for="name" className="form-label">
                        Display Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Display Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="url" className="form-label">
                        Custom URL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="url"
                        placeholder="Custom URL"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="bio" className="form-label">
                        Bio
                      </label>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        className="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <button className="custom-btn" type="submit">
                        <span>Submit Details</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="sm-title mb-3">Your Social media</h4>
                    <div className="mb-3">
                      <label for="facebook" className="form-label">
                        Facebook
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="facebook"
                        placeholder="Facebook"
                      />
                    </div>
                    <div className="mb-3">
                      <a href="" className="custom-btn">
                        <span>Connect to facebook</span>
                      </a>
                    </div>
                    <div className="mb-3">
                      <label for="Twitter" className="form-label">
                        Twitter
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Twitter"
                        placeholder="Twitter"
                      />
                    </div>
                    <div className="mb-3">
                      <a href="" className="custom-btn">
                        <span>Connect to Twitter</span>
                      </a>
                    </div>

                    <div className="mb-3">
                      <label for="Discord" className="form-label">
                        Connect to Discord
                      </label>
                      <input
                        type="Discord"
                        className="form-control"
                        id="Discord"
                        placeholder="Discord Username"
                      />
                    </div>
                    <div className="mb-3">
                      <a href="" className="custom-btn">
                        <span>Connect to Discord</span>
                      </a>
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

export default EditProfile;
