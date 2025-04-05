import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import WishlistPage from "./WishlistPage";
import ProductDetails from "./productDetails";

export default function App() {
  const [breadcrumb, setBreadcrumb] = useState("Home");
  const [cartCount, setCartCount] = useState(0);
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem("currentView") || "cart";
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    try {
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : []; // ✅ Ensure it's an array
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      return [];
    }
  });

  const handleNavClick = (view) => {
    console.log(`Switching to ${view}`); // Debugging statement
    setCurrentView(view);
  };

  const addToCart = (product, position = null) => {
    setCartItems((prevItems) => {
      if (!Array.isArray(prevItems)) return []; // ✅ Ensure prevItems is always an array
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // ✅ Add position to notification
    setNotification({
      show: true,
      message: `${product.name || "Item"} added to cart!`,
      position,
    });

    // ✅ Add position to notification
    setNotification({
      show: true,
      message: `${product.name || "Item"} added to cart!`,
      position,
    });

    setTimeout(() => {
      setNotification({ show: false, message: "", position: null });
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("currentView", currentView);
  }, [currentView]);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (!Array.isArray(cartItems)) {
      setCartItems([]); // ✅ Ensure cartItems is an array
      return;
    }
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  return (
    <Router>
      <Navbar
        onNavClick={handleNavClick}
        setBreadcrumb={setBreadcrumb}
        setCartCount={setCartCount}
        cartCount={cartCount}
        setCurrentView={setCurrentView}
      />
      {currentView === "cart" && <Background breadcrumb={breadcrumb} />}

      {notification.show && notification.position && (
        <div
          className="absolute bg-green-500 text-white p-2 px-4 rounded-md shadow-md z-50 text-sm animate-fade-in"
          style={{
            top: `${notification.position.top + 90}px`,
            left: `${notification.position.left}px`,
          }}
        >
          {notification.message}
        </div>
      )}

      <Routes>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route
          path="/cartPage"
          element={
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/contact" element={<Touch />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route
          path="/"
          element={
            <>
              <Header cartCount={cartCount} />
              <Cart setCartCount={setCartCount} addToCart={addToCart} />
              <Customer /> {/* 👈 now part of the homepage */}
            </>
          }
        />
      </Routes>

      {currentView === "Home" && <Customer />}
      <Footer />
    </Router>
  );
}
