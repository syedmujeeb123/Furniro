import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../index.css";

// Import components
import Navbar from "./navbar";
import Background from "./background";
import Header from "./header";
import Cart from "./cart";
import Buttons from "./buttons";
import Customer from "./customer";
import Footer from "./footer";
import CartPage from "./cartPage";
import Touch from "./touch";

export default function App() {
  const [breadcrumb, setBreadcrumb] = useState("Home");
  const [cartCount, setCartCount] = useState(0);
  const [currentView, setCurrentView] = useState("cart"); // Initialize with the Cart view
  const [cartItems, setCartItems] = useState([]); // State to hold cart items

  const handleNavClick = (view) => {
    console.log(`Switching to ${view}`); // Debugging statement
    setCurrentView(view);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new item with correct image
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="card-container">
        <Navbar
          onNavClick={handleNavClick}
          setBreadcrumb={setBreadcrumb}
          setCartCount={setCartCount}
        />
        <Background breadcrumb={breadcrumb} />

        {/* Render components based on currentView state */}
        {currentView === "cart" && (
          <>
            <Header cartCount={cartCount} />
            <Cart setCartCount={setCartCount} addToCart={addToCart} />
            <Buttons />
          </>
        )}

        {/* Render CartPage when currentView is "cartPage" */}
        {currentView === "cartPage" && (
          <CartPage cartItems={cartItems} setCartItems={setCartItems} /> // Pass cartItems as a prop
        )}

        {currentView === "contact" && (
          <Touch /> // Contact page component
        )}

        <Customer />
        <Footer />
      </div>
    </Router>
  );
}
