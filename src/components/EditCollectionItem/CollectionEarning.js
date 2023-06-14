import React from "react";

const CollectionEarning = () => {
  return (
    <>
      <div className="new-create-content-wrapper">
        <div className="new-create-collection-item">
          <h5 className="modal-titles">Creator Earnings</h5>
          <p>
            Collection owners can collect creator earning whena user re-sells an
            item they created. Contact the collection owner to change the
            collection earnings percentag or the payout address
          </p>
        </div>
        <div className="new-create-collection-item collection-item-address">
          <input className="input-fuild1" type="text" placeholder="Please Enter an address e.g" />
          <input className="input-fuild2" type="text" placeholder="0%" />
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V7C21 7.53043 20.7893 8.03914 20.4142 8.41421C20.0391 8.78929 19.5304 9 19 9H18.867L18.187 19.2C18.1363 19.9593 17.7989 20.6709 17.2432 21.1908C16.6875 21.7107 15.955 21.9999 15.194 22H8.826C8.06567 22 7.33372 21.7113 6.77811 21.1922C6.2225 20.6732 5.8847 19.9626 5.833 19.204L5.137 9H5C4.46957 9 3.96086 8.78929 3.58579 8.41421C3.21071 8.03914 3 7.53043 3 7V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H9ZM19 6H5V7H19V6ZM7.141 9L7.828 19.068C7.84524 19.3209 7.95789 19.5578 8.14316 19.7309C8.32843 19.9039 8.5725 20.0001 8.826 20H15.194C15.4478 20 15.6922 19.9036 15.8775 19.7301C16.0628 19.5567 16.1752 19.3193 16.192 19.066L16.862 9H7.142H7.141ZM10 10C10.2652 10 10.5196 10.1054 10.7071 10.2929C10.8946 10.4804 11 10.7348 11 11V18C11 18.2652 10.8946 18.5196 10.7071 18.7071C10.5196 18.8946 10.2652 19 10 19C9.73478 19 9.48043 18.8946 9.29289 18.7071C9.10536 18.5196 9 18.2652 9 18V11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10ZM14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V18C15 18.2652 14.8946 18.5196 14.7071 18.7071C14.5196 18.8946 14.2652 19 14 19C13.7348 19 13.4804 18.8946 13.2929 18.7071C13.1054 18.5196 13 18.2652 13 18V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="add-collection-address">
          <button>+ Add Address</button>
        </div>

        <div className="save-col-btn">
          <button className="my-collection-btn save-collection-btn">
            Save Collection
          </button>
        </div>
      </div>
    </>
  );
};

export default CollectionEarning;
