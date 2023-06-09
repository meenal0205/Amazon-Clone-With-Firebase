import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/d/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__search_icon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "./login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header__optionLineone">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header__optionLineone">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineone">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/CheckOut">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
