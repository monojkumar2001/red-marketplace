import React from "react";
import CreateCollectionModel from "./CreateCollectionModel";

const CollectionModel = () => {
  return (
    <>
      <div
        className="create-collection-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
      >
        <button className="my-collection-btn">Create Collection </button>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-titles" id="exampleModalLabel">
                Create a Collection
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <CreateCollectionModel />

              <div className="my-collection-item">
                <div className="my-coll-item">
                  <div className="collection-icon">
                    <img src="assets/img/icon/opensea.svg" alt="" />
                  </div>
                  <div className="my-collection-content">
                    <h4>Use the OpenSea contract</h4>
                    <p>Mint item into your collection at any time</p>
                  </div>
                </div>
                <input type="radio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionModel;
