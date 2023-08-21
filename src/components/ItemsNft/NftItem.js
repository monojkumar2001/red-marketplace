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
                <img src={item.img} alt="" className="product" />
              </div>
              <div className="name-cat">
                <span className="nft-title">{item.title}</span>
                <p className="token-type">{item.token}</p>
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
    id: 1,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 2,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 3,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 4,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 5,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 6,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 7,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
  {
    id: 8,
    img: "/assets/img/product/1.png",
    title: "Hamlet Contemplates ...",
    token: "BSC",
  },
];
