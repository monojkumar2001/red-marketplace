import React from "react";

const EditColItem = () => {
  return (
    <>
      <div className="new-create-content-wrapper">
        <div className="new-create-collection-item">
          <h5 class="modal-titles">Create a Collection</h5>
          <p>Drop you collection on OpenSea to let your community mint it</p>
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Peepclub.nftcontrater.com" />
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Description</label>
          <p>Markdow syntax is supported . 0 of 1000 character used</p>
          <textarea name="" id="" cols="30" rows="6"></textarea>
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">URL</label>
          <p>
            Customize your URL on OpenSea Must only contain lowercase letters,
            number and hyphens
          </p>
          <input
            type="text"
            placeholder="https://opensea.io/collections/peepclun-nftconstructer.com"
          />
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Category and tags</label>
          <p>
            Make your items more discoverble on OpenSea by adding tags and a
            category
          </p>
          <div>
            <select name="" id="">
              <option value="one">Select Category</option>
              <option value="two">one</option>
              <option value="three">two</option>
            </select>
          </div>
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Blockchain</label>
          <p>
            Select the blockchain where you’d like new items from this
            collection to be added by default
          </p>
          <div>
            <select name="" id="">
              <option value="one">Goerli</option>
              <option value="two">Ether</option>
            </select>
          </div>
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Payment Tokens</label>
          <p>These tokens can be used tobuy and sell your items</p>
          <div className="token-items">
            <button>ETH </button>
            <button>WETH</button>
          </div>
          <div>
            <select name="" id="">
              <option value="one">Add Token</option>
              <option value="two">Goerli</option>
              <option value="three">Ether</option>
            </select>
          </div>
        </div>
        <div className="new-create-collection-item">
          <div className="create-collection-short-items">
            <div className="create-collection-short-item">
              <h4>Exploct & Sensitive content</h4>
              <p>Set his collection as explicit and sensitive content</p>
            </div>
            <div className="create-collection-short-item dark-mode">
              <input
                className="dm-check"
                type="checkbox"
                name="darkmode"
                id="darkmode1"
              />
              <label className="dm-label" for="darkmode1" />
            </div>
          </div>
        </div>
        <div className="new-create-collection-item">
          <div className="create-collection-short-items">
            <div className="create-collection-short-item">
              <h4>Show OpenRarity Ranking</h4>
              <p>Turnon after all items rvealed and trait metadata is finalized</p>
            </div>
            <div className="create-collection-short-item dark-mode">
              <input
                className="dm-check"
                type="checkbox"
                name="darkmode"
                id="darkmode2"
              />
              <label className="dm-label" for="darkmode2" />
            </div>
          </div>
        </div>
        <div className="new-create-collection-item">
          <label htmlFor="">Collaborators</label>
          <p>Collaboratros can modify collection setting recieve payments for items they created and create new items collaborators cannot change payout addresses or the percentage of creator earning</p>
        </div>
       <div className="save-col-btn">
       <button className="my-collection-btn save-collection-btn">Save Collection</button>
       </div>
      </div>
    </>
  );
};

export default EditColItem;
