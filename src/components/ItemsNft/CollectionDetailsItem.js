import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NftDetails.css"
const CollectionDetailsItem = () => {
    const contractAddress = "0xdABbE2e8b6eD48aF4C419b3ea63e97dafc7df0ba";
    const shortenedAddress = contractAddress.substring(0, 9);
  return (
    <>
      <div className="collection-details-con">
        <div className="owner">
          <div className="avatar">
            <img src="assets/img/inner/7.jpg" alt="" />
          </div>
          <h4>Ralph Garraway</h4>
        </div>
        <div className="token-details-item d-flex align-items-center justify-content-between py-2">
          <Link to="/" target="_blank">
            {shortenedAddress}
          </Link>
        </div>
      </div>
    </>
  );
};

export default CollectionDetailsItem;
