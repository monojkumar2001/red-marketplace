import React, { useState } from "react";
import EditColItem from "./EditCollectionItem/EditColItem";
import CollectionEarning from "./EditCollectionItem/CollectionEarning";
import CollectionLink from "./EditCollectionItem/CollectionLink";
import DropSettingItem from "./EditCollectionItem/DropSettingItem";
import DropPreReveal from "./EditCollectionItem/DropPreReveal";
import DropEarning from "./EditCollectionItem/DropEarning";
import { Link } from "react-router-dom";
const EditCreateCollection = () => {
  const [toggle, setToggle] = useState(1);
  const togglebtn = (index) => {
    setToggle(index);
  };
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar2 = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <>
      <div className="edit-create-collection cpy-8">
        <div className="show-navs" onClick={_toggleSidebar2}>
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20V16.6667H25V20H0ZM0 11.6667V8.33333H25V11.6667H0ZM0 3.33333V0H25V3.33333H0Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className={`edit-create-collection-sidebar ${
            sidebarActive ? "active" : ""
          }`}
        >
          <h1 className="edit-create-collection-title">My Collection</h1>
          <ul className="edit-collection-items">
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <button
                className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(1)}
              >
                Collection
              </button>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <button
                className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(2)}
              >
                Earnings
              </button>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <button
                className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(3)}
              >
                Links
              </button>
            </li>
          </ul>
          <h1 className="edit-create-collection-title">Drop</h1>
          <ul className="edit-collection-items">
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <button
                className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(4)}
              >
                Setting
              </button>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <button
                className={toggle === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(5)}
              >
                Pre Reveal
              </button>
            </li>
            <li className="edit-collection-item" onClick={_toggleSidebar2}>
              <button
                className={toggle === 6 ? "tabs active-tabs" : "tabs"}
                onClick={() => togglebtn(6)}
              >
                Earnings
              </button>
            </li>
            <li className="edit-collection-item">
              <Link to='/user-mint' className="edit-collectin-link">Drop Page</Link>
            </li>
          </ul>
          <div className="close-menus" onClick={_toggleSidebar2}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="edit-create-collection-wrapper">
          <div
            className={toggle === 1 ? "edit-col active-edit-col" : "edit-col"}
          >
            <EditColItem />
          </div>
          <div
            className={toggle === 2 ? "edit-col active-edit-col" : "edit-col"}
          >
           <CollectionEarning/>
          </div>
          <div
            className={toggle === 3 ? "edit-col active-edit-col" : "edit-col"}
          >
            <CollectionLink/>
          </div>
          <div
            className={toggle === 4 ? "edit-col active-edit-col" : "edit-col"}
          >
           <DropSettingItem/>
          </div>
          <div
            className={toggle === 5 ? "edit-col active-edit-col" : "edit-col"}
          >
         <DropPreReveal/>
          </div>
          <div
            className={toggle === 6 ? "edit-col active-edit-col" : "edit-col"}
          >
          <DropEarning/>   
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCreateCollection;
