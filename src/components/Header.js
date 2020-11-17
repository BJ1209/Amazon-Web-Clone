import React from "react";
import "./Header.css";
import amazonLogo from "./../images/amazon-ar21.svg";
import * as MDIcons from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={amazonLogo} alt="Amazon Logo" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <MDIcons.MdSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <MDIcons.MdShoppingBasket className="header__basketIcon" />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
