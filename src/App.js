import "./App.css";
import React from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import Item from "./components/item";
import Explore from "./pages/explore";
import Activity from "./components/activity";
import Wallet from "./components/wallet";
import CreateItem from "./components/createItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Action from "./components/Action";
import Author from "./components/Author";
import Contact from "./components/Contact";

import AuthorProfile from "./components/AuthorProfile";
import EditProfile from "./components/EditProfile";
import User_admin from "./components/dashboard/User_admin";
import Bids from "./components/dashboard/Bids";

import Ranking from "./components/Ranking";
import Collection from "./pages/Collection";
import CollectionCreate from "./components/CollectionCreate";
import MyCollection from "./components/MyCollection";
import EditCreateCollection from "./components/EditCreateCollection";
import UserMint from "./components/UserMint";
import Create from "./components/Create";
import CollectedItem from "./components/dashboard/CollectedItem";
import UserOffersMade from "./components/dashboard/UserOffersMade";
import UserDeals from "./components/dashboard/UserDeals";
import UserFavorited from "./components/dashboard/UserFavorited";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/collection"  element={  <Collection />}/>
          <Route path="/item"  element={   <Item />}/>
          <Route path="/author-profile" element={<AuthorProfile />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/activity" element={ <Activity />}/>
          <Route path="/wallet" element={  <Wallet />}/>
          <Route path="/action" element={  <Action />}/>
          <Route path="/author" element={  <Author />}/>
          <Route path="/contact" element={  <Contact/>}/>
          <Route path="/User-profile" element={  <EditProfile />}/>
          <Route path="/ranking" element={  <Ranking />}/>
          <Route path="/item-create" element={<CreateItem/>}/>
          <Route path="/collection-create" element={<CollectionCreate/>}/>
          <Route path="/my-collection" element={ <MyCollection/>}/>
          <Route path="/edit-create-collection" element={ <EditCreateCollection/>}/>
          <Route path="/user-mint" element={ <UserMint/>}/>
          <Route path="/create" element={<Create/>}/>

          <Route path="/account" element={  <User_admin />}>
            <Route index element={<CollectedItem/>}/>
            <Route path="/account/bids" element ={<Bids/>} />
            <Route path="/account/offers-made" element ={<UserOffersMade/>} />
            <Route path="/account/deals" element ={<UserDeals/>} />
            <Route path="/account/favorited" element ={<UserFavorited/>} />
          </Route>        
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
