import React from "react";
import { Link } from "react-router-dom";
import "../../styles/NftDetails.css"
const TokenDetails = () => {
  const contractAddress = "0xdABbE2e8b6eD48aF4C419b3ea63e97dafc7df0ba";
  const shortenedAddress = contractAddress.substring(0, 9);
  return (
    <>
      <div className="token-details-con">
        <div className="token-details-item d-flex align-items-center justify-content-between py-2">
          <span>Token Id</span>
          <h4>1254</h4>
        </div>
        <div className="token-details-item d-flex align-items-center justify-content-between py-2">
          <span>Blockchain</span>
          <span>Ethereum</span>
        </div>
        <div className="token-details-item d-flex align-items-center justify-content-between py-2">
          <span>Token Standard</span>
          <span>ERC721</span>
        </div>
        <hr />
        <div className="token-details-item d-flex align-items-center justify-content-between py-2">
          <span>Contract</span>
          <Link to="/" target="_blank">
            {shortenedAddress}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TokenDetails;
