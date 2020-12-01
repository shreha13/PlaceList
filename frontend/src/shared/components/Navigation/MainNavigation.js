import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UIElements/Backdrop";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
  const [drawerVisible, setDrawerVisibility] = useState(false);

  const openDrawer = () => {
    setDrawerVisibility(true);
  };

  const closeDrawer = () => {
    setDrawerVisibility(false);
  };
  return (
    <Fragment>
      {drawerVisible && <Backdrop onClick={closeDrawer} />}

      <SideDrawer closeDrawer={closeDrawer} show={drawerVisible}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">PlaceList</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
