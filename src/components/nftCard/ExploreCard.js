import React from "react";
import { Link } from "react-router-dom";
import "../../styles/explore.css";
const ExploreCard = () => {
  return (
    <>
      {data.map((item, i) => {
       return(
        <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={i}>
        <Link to="/" className="product-card">
          <div className="product-image">
            <img src={item.img} alt="" className="product" />
          </div>
          <div className="product-des">
            <div className="name-diamond">
              <div className="name-cat">
                <span href="#" className="product-name">
                {item.title}
                </span>
                <p className="token-type">{item.token}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
       )
      })}
    </>
  );
};

export default ExploreCard;

const data = [
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
  {
    id:'1',
    img:'/assets/img/product/1.png',
    title:"Hamlet Contemplates...",
    token:"BSC",
  },
 
];
