import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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

  // const _toggleDropdown = () => {
  //   setDropdownActive(!dropdownActive);
  // };
  return (
    // <!-- =====================Navigation=========== -->
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <div className="logo">
            <a href="" className="logo-link">
              <img src="assets/img/logo/logo-2.png" alt="" />
            </a>
          </div>
          <div class="search-box header-search-box">
            <form method="post" class="search-form">
              <input
                type="text"
                class="form-control search-input"
                placeholder="Search..."
              />
              <button class="search-btn" type="submit">
                <i class="icofont-search-1"></i>
              </button>
            </form>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <i className="icofont-close"></i>
            </div>
            <ul className="menu-nav-ul">
              <li className="nav-list" >
                <HashLink to="/">
                  <a href="" className="nav-link" onClick={_toggleSidebar}>
                    Home
                  </a>
                </HashLink>
              </li>
              <li className="nav-list" onClick={()=>{
                if(dropdownActive === 1){
                  setDropdownActive();
                }else{
                  setDropdownActive(1)
                }
              }}>
             
              <div class="select nav-select-item">
                    <div className="select-menu">
                      <div className="select-menu-inner">
                        <p>Explore</p>
                        <i class="icofont-simple-down"></i>
                      </div>
                      <ul className={
                          dropdownActive === 1
                           ? "dp-menu active" : 
                           "dp-menu"
                        } >
                        <li>
                         <HashLink to='/item' className='dp-link' onClick={_toggleSidebar}>
                        Item Details
                         </HashLink>
                        </li>
                        <li>
                        <HashLink to='/explore' className='dp-link' onClick={_toggleSidebar}>
                        Explore
                         </HashLink>
                        </li>                    
                        <li>
                        <HashLink to='/action' className='dp-link' onClick={_toggleSidebar}>
                        Auctions
                         </HashLink>
                        </li>                    
                      </ul>
                    </div>
                  </div>
              </li>
              <li className="nav-list">
                <HashLink to="/activity" onClick={_toggleSidebar}>
                  <a href="" className="nav-link">
                  Activity               
                  </a>
                </HashLink>
              </li>
             
              <li className="nav-list" onClick={()=>{
                if(dropdownActive === 2){
                  setDropdownActive();
                }else{
                  setDropdownActive(2)
                }
              }}>
              <div class="select nav-select-item">
                    <div className="select-menu">
                      <div className="select-menu-inner">
                        <p>Community</p>
                        <i class="icofont-simple-down"></i>
                      </div>
                      <ul className={
                          dropdownActive === 2
                           ? "dp-menu active" : 
                           "dp-menu"
                        }>
                        <li>
                         <HashLink to='/help' className='dp-link' onClick={_toggleSidebar}>
                        Help Center
                         </HashLink>
                        </li>                    
                      </ul>
                    </div>
                  </div>
              </li>
              <li className="nav-list" onClick={()=>{
                if(dropdownActive === 3){
                  setDropdownActive();
                }else{
                  setDropdownActive(3)
                }
              }}>
             
                <div class="select nav-select-item">
                    <div className="select-menu">
                      <div className="select-menu-inner">
                        <p>Pages</p>
                        <i class="icofont-simple-down"></i>
                      </div>
                      <ul className={
                          dropdownActive === 3
                           ? "dp-menu active" : 
                           "dp-menu"
                        }>
                      <li>
                        <HashLink to='/user-admin' className='dp-link' onClick={_toggleSidebar}>
                       User Admin
                         </HashLink>
                        </li>
                        <li>
                         <HashLink to='/author' className='dp-link' onClick={_toggleSidebar}>
                        Authors
                         </HashLink>
                        </li>
                        
                        <li>
                        <HashLink to='/ranking' className='dp-link' onClick={_toggleSidebar}>
                      Ranking
                         </HashLink>
                        </li>
                        <li>
                        <HashLink to='/user-profile' className='dp-link' onClick={_toggleSidebar}>
                      User Profile
                         </HashLink>
                        </li>
                        <li>
                        <HashLink to='/item-create' className='dp-link' onClick={_toggleSidebar}>
                      Create Items
                         </HashLink>
                        <HashLink to='/collection' className='dp-link' onClick={_toggleSidebar}>
                      Collection
                         </HashLink>
                        <HashLink to='/collection-create' className='dp-link' onClick={_toggleSidebar}>
                      Collection Create 
                         </HashLink>
                        </li>
                      
                      </ul>
                    </div>
                  </div>
               
              </li>
              <li className="nav-list">
                <HashLink to="/contact" onClick={_toggleSidebar}>
                  <a href="" className="nav-link">
                  Contacts
                  </a>
                </HashLink>
              </li>
            </ul>
           <Link to='/wallet' onClick={_toggleSidebar}>
           <a href="" className="custom-btn l-none mt-3 connect-btn-mobile">
              <span>Connect Wallet</span>
            </a>
           </Link>
          </div>
  
          <div className="wallet-btn m-none">
           <Link to='/wallet' onClick={_toggleSidebar}>
           <a href="" className="custom-btn-alt">
              <span>
                <i class="icofont-wallet"></i> Connect Wallet
              </span>
            </a>
           </Link>
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
