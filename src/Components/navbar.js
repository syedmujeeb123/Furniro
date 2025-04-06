import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/logo.png";
import Profile from "./Images/profile.png";
import Search_icon from "./Images/search_icon.png";
import Wishlist_icon from "./Images/wishlist_icon.png";
import Shopping_cart from "./Images/shopping_cart.png";
import Compare from "./Images/compare-nav.png";
import { WishlistContext } from "../context/WishlistContext";

export default function Navbar({
  onNavClick,
  setBreadcrumb,
  setCartCount,
  cartCount,
  setCurrentView,
}) {
  const { wishlist } = useContext(WishlistContext);
  const wishlistCount = wishlist.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center md:px-14 px-6 py-4 cursor-pointer relative z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Link
          className="flex gap-2 items-center"
          to="/"
          onClick={() => {
            setBreadcrumb("Home");
            setCurrentView("cart");
          }}
        >
          <img src={Logo} alt="Logo" className="h-6" />
          <div className="font-bold text-2xl">Furniro</div>
        </Link>
      </div>

      {/* Blurred Background When More is Open */}
      {showIcons && (
        <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm z-10"></div>
      )}

      {/* Dropdown for Icons in Mobile Menu */}
      <div className="md:hidden relative z-50">
        {showIcons && (
          <div className="absolute left-0 top-full mt-10 ml-6 shadow-md w-full flex flex-row flex-wrap gap-4 rounded-lg p-4">
            <Link to="/wishlist">
              <div className="flex items-center gap-1">
                <img src={Wishlist_icon} className="w-6 h-6" alt="Wishlist" />
                <span>({wishlistCount})</span>
              </div>
            </Link>
            <Link to="/cartPage">
              <div className="flex items-center gap-1">
                <img src={Shopping_cart} className="w-6 h-6" alt="Cart" />
                <span>({cartCount})</span>
              </div>
            </Link>
            <div className="flex items-center gap-1">
              <img src={Profile} className="w-6 h-6" alt="Profile" />
              <span>Profile</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={Search_icon} className="w-6 h-6" alt="Search" />
              <span>Search</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={Compare} className="w-6 h-6" alt="Compare" />
              <span>Compare</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Toggle & More Button Container */}
      <div className="md:hidden flex items-center gap-4 z-50">
        {/* More Button */}
        <button
          className="text-left flex justify-end text-sm"
          onClick={() => setShowIcons(!showIcons)}
        >
          More {showIcons ? "▼" : "▲"}
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-black focus:outline-none text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`absolute text-center md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-0 transition-all ${
          menuOpen ? "block" : "hidden"
        } md:flex z-40`}
      >
        <li className="relative group">
          <Link
            to="/"
            onClick={() => {
              setBreadcrumb("Home");
              onNavClick("cart");
              setMenuOpen(false);
            }}
            className="inline-block relative"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/shop"
            onClick={() => {
              setBreadcrumb("Home > Shop");
              onNavClick("shop");
              setMenuOpen(false);
            }}
            className="inline-block relative"
          >
            Shop
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/"
            onClick={() => setBreadcrumb("Home > About")}
            className="inline-block relative"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/"
            onClick={() => {
              setBreadcrumb("Home > Contact");
              onNavClick("contact");
              setMenuOpen(false);
            }}
            className="inline-block relative"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-6 items-center">
        <img src={Profile} className="w-6 h-6" alt="Profile" />
        <img src={Search_icon} className="w-6 h-6" alt="Search" />
        <img src={Compare} className="w-6 h-6" alt="Compare" />

        {/* Wishlist Icon */}
        <div className="relative">
          <Link to="/wishlist">
            <img src={Wishlist_icon} className="w-6 h-6" alt="Wishlist" />
          </Link>
          {wishlistCount > 0 && (
            <span className="absolute -right-1 -top-1 bg-black p-1 w-4 h-4 text-white text-[10px] rounded-full flex items-center justify-center text-center">
              {wishlistCount}
            </span>
          )}
        </div>

        {/* Shopping Cart Icon */}
        <div className="relative">
          <Link to="/cartPage">
            <img
              src={Shopping_cart}
              className="w-6 h-6"
              alt="Shopping Cart"
              onClick={() => {
                setBreadcrumb("Home > Cart");
                onNavClick("cartPage");
              }}
            />
          </Link>
          {cartCount > 0 && (
            <span className="absolute -right-3 -top-1 bg-black p-1 w-4 h-4 text-white text-[10px] rounded-full flex items-center justify-center text-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
