import { Link } from "react-router-dom";
const DropPreReveal = () => {
  return (
    <>
      <div className="new-create-content-wrapper new-create-content-wrapper1">
        <div className="new-create-collection-item">
          <h5 class="modal-titles">Drop Setting</h5>
          <p>
            Each NFT in your collection will shwo your pre- reveal media until
            you upload and reveal your final assests
          </p>
        </div>
        <div className="new-create-collection-item new-create-collection-itemss">
          <div className="product-card">
            {/* <div className="product-image">
                    <a href="" className="product-link">
                      <img
                        src="assets/img/product/1.png"
                        alt=""
                        className="product"
                      />
                    </a>
                  </div> */}
            <div className="input-img-feild">
              <input type="file"/>
            </div>
            <div className="product-des">
              <div className="name-diamond">
                <div className="name-cat">
                  <Link to="/item">
                    <a href="#" className="product-name">
                      "Hamlet Contemplates ...
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save-col-btn">
          <button className="save-collection-btn-at">Save Draft</button>
          <button className="my-collection-btn save-collection-btn">
            Save Collection
          </button>
        </div>
      </div>
    </>
  );
};

export default DropPreReveal;
