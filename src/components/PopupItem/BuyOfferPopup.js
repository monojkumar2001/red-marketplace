import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../../styles/MakeOffer.css';
const BuyOfferPopup = () => {
  const [popupActive, setPopupActive] = useState(false);
  const toggleHandlePopup = () => {
    setPopupActive(!popupActive);
  };

const [inputValue, setInputValue]=useState("");

const number=(e)=>{
  const newValue=e.target.value.replace(/[^0-9.]/g,'');
  setInputValue(newValue)
}

  return (
    <>
      <button className="bid-btn-init w-100" onClick={toggleHandlePopup}>
        <span>Buy offer</span>
      </button>
      {popupActive && (
        <div className="wallet_model">
          <div className="overlay2"></div>
          <div className="modal-content wallet-connect-content">
            <div className="modal-header flex-column justify-content-center text-center">
              <h5 className="modal-title">Buy Offer</h5>

              <button
                type="button"
                className="btn-close"
                onClick={toggleHandlePopup}
              ></button>
            </div>
            <div className="wallet-content-wrapper d-flex flex-column gap-2">
              <div className="nft-items-headers d-flex align-items-center gap-3">
                <div className="nft-imgs">
                  <LazyLoadImage
                    src="/assets/img/collection/1.png"
                    width="50px"
                    height="50px"
                    alt=""
                  />
                </div>
                <div className="nft-item-title">
                  <h3>Stitch</h3>
                  <p>Stitched Stories</p>
                </div>
              </div>
              <div className="nft-item-price mt-3 d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="Input price"
                  className=""
                  id="numberField"
                  required
                  value={inputValue}
                  onChange={number}
                />
                <h4>ETH</h4>
              </div>
              <hr />
              <div className="nft-offer-balance w-100 d-flex align-items-center  gap-3">
                <div className="nft-offer-balance-item">
                  <p>Offer With</p>
                </div>
                <div className="nft-offer-balance-item">
                  <h4>ETH</h4>
                  <p>Balance: 0</p>
                </div>
              </div>

              <p>Your ETH Balance: 0</p>
              <hr />
              <div className="nft-validity-items mb-3 d-flex algin-items-center justify-content-between gap-4">
                <p>Validity</p>
                <select className="form-select" aria-label="Default select example">
                  <option selected>30 days</option>
                  <option value="1">1 days</option>
                  <option value="2">7 days</option>
                  <option value="3">14 days</option>
                </select>
              </div>
              <div className="nft-btn-items d-flex align-items-center gap-3">
                <button className="bid-btn-init alt-bid-btn-init">Cancel</button>
                <button className="bid-btn-init">Buy Offer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyOfferPopup;
