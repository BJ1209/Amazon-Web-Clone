import React from "react";
import "./Header.css";
import amazonLogo from "./../images/amazon-ar21.svg";
import * as MDIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../config/firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(user);

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonLogo} alt="Amazon Logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <MDIcons.MdSearch className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user?.displayName : "Guest"}
            </span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <MDIcons.MdShoppingBasket className="header__basketIcon" />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
