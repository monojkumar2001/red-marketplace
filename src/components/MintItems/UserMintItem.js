import React from "react";
import { useState } from "react";

const UserMintItem = () => {
  const [count, setCount]=useState(0);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="mint-col-items">
            <h2>About This Collection</h2>
            <div className="mint-col-profile">
              <div className="mint-user-img">
              <img src="assets/img/profile-imgs.png" alt="" />
              </div>
              <div className="mint-user-content">
                <h4>Drop Test - MB</h4>
                <p>Goerli</p>
              </div>
            </div>
            <p>
              {" "}
              This is the drop description on chain It is a long descripton
            </p>
            <p>An it require multiple lines</p>
            <div className="minted-items">
              <div className="minted-items-content">
                <h4>21.7% Minted</h4>
                <p>
                  <span>19,522 </span>/ <span>90,000</span>
                </p>
              </div>
              <div className="progress" Style="height: 5px; color:red">
                <div
                  className="progress-bar"
                  role="progressbar"
                  Style="width: 25%;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="mint-public-sale">
              <h2>Public Sale</h2>
              <span>1E-14ETH</span>
              <p>Limit 5 per wallet</p>
              <div className="mint-public-count">
                <div className="mint-public-count-item">
                  <button 
                  onClick={()=>{
                    if(count>1){
                      setCount(count-1);
                    }
                  }}
                  
                  >-</button>
                  <span>{count}</span>
                  <button 
                  onClick={()=>{
                    if(count<5){
                      setCount(count+1)
                    }
                  }}
                  
                  >+</button>
                </div>
                <button className="mint-public-mint-btn">Mint</button>
              </div>
            </div>
            <div className="mint-user-schedule">
              <h2>Mint schedule</h2>
              <div className="mint-user-schedule-items">
                <div className="mint-user-schedule-item">
                <input type="radio" />
                <div className="mint-user-schedule-content">
                  <h4>Public Sale</h4>
                  <p>April 24 at 10:00 PM GMT + 6</p>
                </div>
                </div>
                <span>Eligible </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="mint-user-img-items">
            <div className="mint-user-item-img">
              <img src="assets/img/product/1.png" alt="" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMintItem;
