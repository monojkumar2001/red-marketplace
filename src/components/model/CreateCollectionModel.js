import React, { useState } from "react";

const CreateCollectionModel = () => {
  const [createModel, setCreateModel] = useState(false);
  const createModelHandler = () => {
    setCreateModel(!createModel);
  };
  return (
    <>
      <button className="my-collection-item" onClick={createModelHandler}>
        <div className="my-coll-item">
          <div className="collection-icon">
            <img src="assets/img/icon/opensea.svg" alt="" />
          </div>
          <div className="my-collection-content">
            <h4>Deploy you own conract</h4>
            <p>Drop you collection on OpenSea to let your community mint it</p>
          </div>
        </div>
        <input type="radio" />
      </button>
      {/* <!-- Button trigger modal --> */}
      {createModel && (
        <div className="new-cr eate-model">
          <div className="overlay"></div>
          <div className="new-create-content">
            <button className="close-btn" onClick={createModelHandler}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                  fill="white"
                />
              </svg>
            </button>

            <div className="new-create-collection-item">
              <h5 class="modal-titles">Create a Collection</h5>
              <p>
                Drop you collection on OpenSea to let your community mint it
              </p>
            </div>
            <div className="new-create-collection-item">
              <label htmlFor="">Logo Image</label>
              <input type="file" id="myfile" name="myfile" />
            </div>
            <div className="new-create-collection-item">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="My Collection Name" />
            </div>
            <div className="new-create-collection-item">
              <label htmlFor="">Token Symbol</label>
              <p>
                The Token symbol is dhwon on the block explorer when otherview
                your smart contract.
              </p>
              <input type="text" placeholder="MCN" />
            </div>
            <div className="new-create-collection-item">
              <label htmlFor="">Blockchain</label>
              <div>
                <select name="" id="">
                  <option value="one">Goerli</option>
                  <option value="two">Ether</option>
                </select>
              </div>
            </div>
            <div className="new-create-collection-item">
              <label htmlFor="">Contract Type</label>
              <p>Learn more about each other type.</p>
              <div className="new-create-collection-fuild">
                <div className="my-collection-content">
                  <h4>Standard Contract</h4>
                  <p>
                    More expensive to deploy but mint, transfer, and sale
                    interaction will require less gas fees.
                  </p>
                </div>
                <input type="radio" />
              </div>
            </div>
            <button className="my-collection-btn">Deploy Contract</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateCollectionModel;
