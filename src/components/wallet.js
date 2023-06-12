import { Link } from "react-router-dom";

function Wallet() {
  return (
    <>
      {/*
                <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>Connect wallet</h2>
              <div className="page-route">
              <Link to="/">Home</Link>
                <p>/ Pages / Connect wallet </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
                <!-- =============page banner end================ -->*/}
      {/* ================wallet=================== */}
      <div className="wallet-wrapper cpy-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="wallet-wrapper-title">
                <h2>Connect your wallet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
              </div>
            </div>
          </div>

          <div className="wallet-card-item mt-5">
            <div className="row">
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img src="assets/img/icon/meta.svg" alt="wallet-icon" />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Fortmatic</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img
                      src="assets/img/icon/fortmatic.svg"
                      alt="wallet-icon"
                    />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Wallet Connect</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img src="assets/img/icon/coinbase.svg" alt="wallet-icon" />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Coinbase Wallet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img
                      src="assets/img/icon/authereum.svg"
                      alt="wallet-icon"
                    />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Authereum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img src="assets/img/icon/kaikas.svg" alt="wallet-icon" />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Kaikas</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img src="assets/img/icon/torus.svg" alt="wallet-icon" />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Torus</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img src="assets/img/icon/bitski.svg" alt="wallet-icon" />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Bitski</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 mb-4 ">
                <div className="wallet-item">
                  <div className="wallet-item-icon">
                    <img src="assets/img/icon/ddd.svg" alt="wallet-icon" />
                  </div>
                  <div className="wallet-item-content">
                    <h3>Wallet Connect</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================wallet end=================== */}
    </>
  );
}

export default Wallet;
