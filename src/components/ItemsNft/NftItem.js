import React from "react";
import { Link } from "react-router-dom";
const NftItem = () => {
  return (
    <>
      {nftData.map((item, i) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
            <Link to={"/item"} className="nft-item-card">
              <div className="nft-image">
                <img src={item.img} alt="" width={500}  className="product" />
              </div>
              <div className="name-cat">
                <span className="nft-title">{item.title}</span>
                <p className="token-type">{item.token}</p>
              </div>
              <div className="buy-like">
                      <div className="author-info">
                        <div className="author-name-type">
                          <p className="author-type">Hightest bid</p>
                          <p className="price">No bids yet</p>
                        </div>
                      </div>
                      <div className="price-area">
                        <p className="price-type">Price</p>
                        <p className="price"> 4.89 ETH</p>
                      </div>
                    </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NftItem;

const nftData = [
  {
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
    price:'0.2',
    bids:"No bids yet"
  },
  {
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
    price:'0.2',
    bids:"No bids yet"
  },
  {
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
    price:'0.2',
    bids:"No bids yet"
  },
  {
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
    price:'0.2',
    bids:"No bids yet"
  },
  {
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
    price:'0.2',
    bids:"No bids yet"
  },
  {
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
    price:'0.2',
    bids:"No bids yet"
  },
];
