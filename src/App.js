import "./App.css";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Item from "./components/item";
import Explore from "./components/explore";
import Activity from "./components/activity";
import Wallet from "./components/wallet";
import Create from "./components/createItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Action from "./components/Action";
import Help from "./components/Help";
import Author from "./components/Author";
import Contact from "./components/Contact";

import AuthorProfile from "./components/AuthorProfile";
import EditProfile from "./components/EditProfile";
import User_admin from "./components/dashboard/User_admin";
import Bids from "./components/dashboard/Bids";
import Saved from "./components/dashboard/Saved";
import User_list from "./components/dashboard/User_list";
import UserWallet from "./components/dashboard/User-wallet";
import Ranking from "./components/Ranking";
import Collection from "./components/Collection";
import CollectionCreate from "./components/CollectionCreate";
function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/collection">
            <Collection />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/item">
            <Item />
          </Route>
          <Route exact path="/author-profile">
            <AuthorProfile />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/activity">
            <Activity />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/action">
            <Action />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/author">
            <Author />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/User-profile">
            <EditProfile />
          </Route>
          <Route exact path="/ranking">
            <Ranking />
          </Route>
          <Route exact path="/user-admin">
            <User_admin />
          </Route>
          <Route exact path="/bids">
            <Bids />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/user-list">
            <User_list />
          </Route>
          <Route exact path="/user-wallet">
            <UserWallet />
          </Route>
          <Route exact path="/ranking">
            <Ranking />
          </Route>
          <Route exact path="/item-create">
            <Create />
          </Route>
          <Route exact path="/collection-create">
            <CollectionCreate/>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
