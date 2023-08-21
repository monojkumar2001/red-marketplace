import { useState, useEffect } from "react";
import NftItem from "../ItemsNft/NftItem";
const UserDeals = () => {
  const [activeNfts, setActiveNfts] = useState(1);
  const toggleNfts = (index) => {
    setActiveNfts(index);
  };
  const [filterActive, setFilterActive] = useState([false]);
  const toggleFilterMenu = () => {
    setFilterActive(!filterActive);
  };
  return (
    <>
      <div className="dashboard-header-item">
        <div className="dashboard-con-btn d-flex align-items-center gap-3">
          <button
            className={
              activeNfts === 1 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
            }
            onClick={() => {
              toggleNfts(1);
            }}
          >
            All
          </button>
          <button
            className={
              activeNfts === 2 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
            }
            onClick={() => {
              toggleNfts(2);
            }}
          >
            Active
          </button>
          <button
            className={
              activeNfts === 3 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
            }
            onClick={() => {
              toggleNfts(3);
            }}
          >
            Accepted
          </button>
          <button
            className={
              activeNfts === 4 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
            }
            onClick={() => {
              toggleNfts(4);
            }}
          >
            Canceled
          </button>
          <button
            className={
              activeNfts === 5 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
            }
            onClick={() => {
              toggleNfts(5);
            }}
          >
            Inactive
          </button>
          <button
            className={
              activeNfts === 6 ? "my-nft-btn active-my-nft-btn" : "my-nft-btn"
            }
            onClick={() => {
              toggleNfts(6);
            }}
          >
            Expired
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
            <div
              className={
                activeNfts === 4
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
                activeNfts === 5
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
                activeNfts === 6
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
  );
};

export default UserDeals;
