import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SearchBarItem from "../SearchBar/SearchBarItem";
import ConnectWalletBtn from "../ConnectWallet/ConnectWalletBtn";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  console.log(activeIndex);

  const [dropdownActive, setDropdownActive] = useState();



  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src="assets/img/logo/logo-2.png" alt="" />
            </Link>
          </div>
        <SearchBarItem/>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <i className="icofont-close"></i>
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list">
                <HashLink to="/">
                  <Link to="/" className="nav-link" onClick={_toggleSidebar}>
                    Home
                  </Link>
                </HashLink>
              </li>
              <li
                className="nav-list"
                onClick={() => {
                  if (dropdownActive === 1) {
                    setDropdownActive();
                  } else {
                    setDropdownActive(1);
                  }
                }}
              >
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Explore</p>
                      <i className="icofont-simple-down"></i>
                    </div>
                    <ul
                      className={
                        dropdownActive === 1 ? "dp-menu active" : "dp-menu"
                      }
                    >
                      <li>
                        <HashLink
                          to="/item"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Item Details
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/explore"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Explore
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/action"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Auctions
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li
                className="nav-list"
                onClick={() => {
                  if (dropdownActive === 3) {
                    setDropdownActive();
                  } else {
                    setDropdownActive(3);
                  }
                }}
              >
                <div className="select nav-select-item">
                  <div className="select-menu">
                    <div className="select-menu-inner">
                      <p>Pages</p>
                      <i className="icofont-simple-down"></i>
                    </div>
                    <ul
                      className={
                        dropdownActive === 3 ? "dp-menu active" : "dp-menu"
                      }
                    >
                      <li>
                        <HashLink
                          to="/account"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          User Account
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/author"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Authors
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/my-collection"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          My Collection
                        </HashLink>
                      </li>

                      <li>
                        <HashLink
                          to="/ranking"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Ranking
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/user-profile"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          User Profile
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/item-create"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Create Items
                        </HashLink>
                        <HashLink
                          to="/collection"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Collection
                        </HashLink>
                        <HashLink
                          to="/collection-create"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                          Collection Create
                        </HashLink>
                        <HashLink
                          to="/edit-create-collection"
                          className="dp-link"
                          onClick={_toggleSidebar}
                        >
                         Edit Collection
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-list">
                <HashLink to="/contact" onClick={_toggleSidebar}>
                  <Link to="/" className="nav-link">
                    Contacts
                  </Link>
                </HashLink>
              </li>
              <li className="nav-list px-3">
              <ConnectWalletBtn/>
              </li>
            </ul>
          
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <i className="icofont-navigation-menu"></i>
          </div>
        </nav>
      </div>
    </header>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
