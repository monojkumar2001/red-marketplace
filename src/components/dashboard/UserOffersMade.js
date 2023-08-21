import { useState, useEffect } from "react";
import NftItem from "../ItemsNft/NftItem";
const UserOffersMade = () => {
    const [activeNfts, setActiveNfts] = useState(1);
    const toggleNfts = (index) => {
      setActiveNfts(index);
    };
  
  return (
    <>
     <div className="dashboard-header-item">
            <div className="dashboard-con-btn d-flex align-items-center gap-3">
              <button
                className={
                  activeNfts === 1
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(1);
                }}
              >
                Active
              </button>
              <button
                className={
                  activeNfts === 2
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(2);
                }}
              >
                Expiring
              </button>
              <button
                className={
                  activeNfts === 3
                    ? "my-nft-btn active-my-nft-btn"
                    : "my-nft-btn"
                }
                onClick={() => {
                  toggleNfts(3);
                }}
              >
               Inactive
              </button>        
            </div>
          </div>
          <div className="nft-account-contents">
        <div className="dashboard-account-wrapper">
          <div className="dashboard-content-item">
            <div
              className={
                activeNfts === 1
                  ? "filter-list-item-ber active"
                  : "filter-list-item-ber"
              }
            >
              <div className="row g-4">
                <NftItem />
              </div>
            </div>

            <div
              className={
                activeNfts === 2
                  ? "filter-list-item-ber active"
                  : "filter-list-item-ber"
              }
            >
              <div className="row g-4">
                <NftItem />
              </div>
            </div>
            <div
              className={
                activeNfts === 3
                  ? "filter-list-item-ber active"
                  : "filter-list-item-ber"
              }
            >
              <div className="row g-4">
                <NftItem />
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default UserOffersMade