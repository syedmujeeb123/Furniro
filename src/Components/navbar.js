import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/logo.png";
import Profile from "./Images/profile.png";
import Search_icon from "./Images/search_icon.png";
import Wishlist_icon from "./Images/wishlist_icon.png";
import Shopping_cart from "./Images/shopping_cart.png";

export default function Navbar({ onNavClick, setBreadcrumb, setCartCount }) {
  return (
    <nav className="flex justify-between items-center px-14 py-4 cursor-pointer">
      <div className="flex items-center gap-2">
        {/* Wrap the logo and brand name in a Link to navigate to home */}
        <Link
          className="flex gap-2 items-center"
          to="/"
          onClick={() => {
            setBreadcrumb("Home");
            window.location.reload(); // Reload the page
          }}
        >
          <img src={Logo} alt="Logo" className="h-6" />
          <div className="font-bold text-2xl">Furniro</div>
        </Link>
      </div>
      <ul className="flex gap-12">
        <li>
          <Link
            to="/"
            onClick={() => {
              setBreadcrumb("Home");
              onNavClick("cart"); // Navigate to home (cart view)
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setBreadcrumb("Home > Shop")}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setBreadcrumb("Home > About")}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              setBreadcrumb("Home > Contact");
              onNavClick("contact"); // Navigate to contact view
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex gap-6 items-center">
        <img
          src={Profile}
          style={{ width: "20px", height: "20px" }}
          alt="Profile"
        />
        <img
          src={Search_icon}
          style={{ width: "20px", height: "20px" }}
          alt="Search"
        />
        <img
          src={Wishlist_icon}
          style={{ width: "20px", height: "20px" }}
          alt="Wishlist"
        />
        {/* Shopping Cart Icon */}
        <img
          src={Shopping_cart}
          style={{ width: "20px", height: "20px" }}
          alt="Shopping Cart"
          onClick={() => {
            setBreadcrumb("Home > Cart");
            onNavClick("cartPage"); // Navigate to cart page
          }}
        />
      </div>
    </nav>
  );
}
