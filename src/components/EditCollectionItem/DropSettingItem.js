import React from 'react'

const DropSettingItem = () => {
  return (
    <>
       <div className="new-create-content-wrapper">
        <div className="new-create-collection-item">
          <h5 class="modal-titles">Drop Setting</h5>
        </div>
        <div className="new-create-collection-item">
          <div className="create-collection-short-items">
            <div className="create-collection-short-item">
              <h4>Limited Edition</h4>
              <p>A limit number of items</p>
            </div>
            <div className="create-collection-short-item dark-mode">
              <input
                class="dm-check"
                type="checkbox"
                name="darkmode"
                id="darkmode3"
              />
              <label class="dm-label" for="darkmode3" />
            </div>
          </div>
        </div>
        <div className="new-create-collection-item">
          <div className="create-collection-short-items">
            <div className="create-collection-short-item">
              <h4>Open Edition</h4>
              <p>an unlimited number of items </p>
            </div>
            <div className="create-collection-short-item dark-mode">
              <input
                class="dm-check"
                type="checkbox"
                name="darkmode"
                id="darkmode4"
              />
              <label class="dm-label" for="darkmode4" />
            </div>
          </div>
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Number of items</label>
          <input type="text" placeholder="Example : 1000" />
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Number of items</label>
          <input type="date" placeholder="Example : 1000" />
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Mint Stages</label>
        </div>
        <div className="add-collection-address">
          <button>+ Add Address</button>
        </div>
        <div className="new-create-collection-item">
         <div className="drop-profile-stage">
            <div className="drop-profile-img">
                <img src="assets/img/profile-imgs.png" alt="" />
            </div>
            <div className="drop-conent">
                <h4>Public Stage</h4>
                <span>June 12. 2023 at 7: 19 PM GMT+6 0 ETH</span>
            </div>
         </div>
        </div>
       <div className="save-col-btn">
       <button className="save-collection-btn-at">Save Draft</button>
       <button className="my-collection-btn save-collection-btn">Save Collection</button>
       </div>
      </div>
    </>
  )
}

export default DropSettingItem