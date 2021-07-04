import React from 'react';
import "../css/header.css";
import dropdown from "../images/dropdown-icon.svg";
import sidebarArrow from "../images/sidebar-arrow.svg";

const Header = () => {
  const showMenu = () => {
    const menu = document.querySelector(".dropdown-menu");
    menu.classList.add("dropdown-menu--active");
  }

  const hideMenu = () => {
    const menu = document.querySelector(".dropdown-menu");
    menu.classList.remove("dropdown-menu--active");
  }

  const showSideBar = () => {
    const sideBar = document.querySelector(".side-bar");
    const sideBarHead = document.querySelector(".side-bar-head");
    const contentBlock = document.querySelector(".deposits-block");

    sideBar.classList.toggle("side-bar--active");
    sideBarHead.classList.toggle("side-bar-head--active");
    contentBlock.classList.toggle("content-block--active")
  }

  return (
    <div className="header">
      <div className="side-bar-head" onClick={() => showSideBar()}>
        <img className="side-bar-arrow" src={sidebarArrow} alt="" />
      </div>
      <div className="user-info" tabIndex={-1} onClick={() => showMenu()} onBlur={() => hideMenu()}>
        <p className="user-name">Kira Huston</p>
        <img src={dropdown} alt="" />
        <div className="dropdown-menu">
          <span className="menu-item">Profile</span>
          <span className="menu-item">Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
