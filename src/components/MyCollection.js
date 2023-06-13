import React, { useState } from "react";

import { Link } from "react-router-dom";
import ProductCard from "./ItemsNft/ProductCard";
import CollectionModel from "./model/CollectionModel";
function MyCollection() {
  const [collection, setCollection] = useState(false);
  // const toggleCollectionHandler=()=>{
  //     setCollection!collection
  // }
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>My collection</h2>
              <div className="page-route">
                <Link to="/">Home</Link>
                <p> / Pages / My Collections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
    <!-- =============page banner end================ -->*/}
      <div className="my-collection cpy-6">
        <div className="container">
          <div className="my-collection-title cpt-5">
            <h2>My Collections</h2>
            <p>
              Create curote andmariage colleciton of unique NFTs to share and
              sell . Learn more
            </p>
          </div>           
       <CollectionModel/>

          <div className="row g-4 cpt-7">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ProductCard />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ProductCard />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCollection;
