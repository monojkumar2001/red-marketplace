import { Link } from "react-router-dom";
import { useState } from "react";
import UserMintItem from "./MintItems/UserMintItem";
import UserRoadmap from "./MintItems/UserRoadmap";
import UserTeam from "./MintItems/UserTeam";
import UserFaq from "./MintItems/UserFaq";

const UserMint = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const activeBtnHandler = (index) => {
    setActiveBtn(index);
  };
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>User Mint</h2>
              <div className="page-route">
                <Link to="/">Home</Link>
                <p>/ Pages / User Mint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      {/* ============== Mint Page ===================*/}
      <section className="mint-page cpy-6">
        <div className="container">
          <div className="mint-header-content">
            <button
              className={
                activeBtn === 1 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() =>activeBtnHandler(1)}
            >
              Mint
            </button>
            <button
              className={
                activeBtn === 2 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() => activeBtnHandler(2)}
            >
              Roadmap
            </button>
            <button
              className={
                activeBtn === 3 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() => activeBtnHandler(3)}
            >
              Team
            </button>
            <button
              className={
                activeBtn === 4 ? "mint-header-item active" : "mint-header-item"
              }
              onClick={() =>activeBtnHandler(4)}
            >
              FAQ
            </button>
          </div>
          <div className="mint-content-wrapper">
            <div
              className={
                activeBtn === 1
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
              <UserMintItem />
            </div>
            <div
              className={
                activeBtn === 2
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
              <UserRoadmap/>
            </div>
            <div
              className={
                activeBtn === 3
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
                <UserTeam/>
            </div>
            <div
              className={
                activeBtn === 4
                  ? "mint-content-items active"
                  : "mint-content-items"
              }
            >
                <UserFaq/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserMint;
