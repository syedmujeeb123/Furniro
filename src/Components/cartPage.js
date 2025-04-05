import React, { useState } from "react";
import bucket from "./Images/bucket.svg";
import { Link } from "react-router-dom";

export default function CartPage({ cartItems = [], setCartItems }) {
  const taxRate = 0.1;
  const [totalAmount, setTotalAmount] = useState(null);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalTax = subtotal * taxRate;
  const total = subtotal + totalTax;

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    setTotalAmount(total);
    setCheckoutMessage("Order placed successfully!");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 pt-8 lg:pt-16 items-center lg:items-start justify-center">
        {/* Left Section: Product List */}
        <div className="flex flex-col w-full lg:w-[700px]">
          <nav className="bg-customBeige h-14 w-full">
            <ul className="font-bold grid grid-cols-4 px-4 sm:px-8 md:px-12 py-4 text-sm sm:text-base text-center">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </nav>

          {/* Scrollable container with custom scrollbar */}
          <div className="overflow-y-auto max-h-[500px] pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-200 w-full">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 gap-4 items-center text-sm sm:text-base py-6 px-2 sm:px-4 border-b"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Link
                      to={`/product/${item.id}`}
                      className="flex items-center gap-2 sm:gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 sm:w-20"
                      />
                      <div className="flex flex-col">
                        <p className="text-center sm:hidden lg:block xl:hidden block">
                          Rs. {item.price}
                        </p>
                        <p className="font-medium">{item.name}</p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-center text-white sm:text-black lg:text-white xl:text-black">
                    Rs. {item.price}
                  </p>
                  <div className="flex items-center gap-1 sm:gap-2 justify-center">
                    <button
                      className="border border-gray-300 px-2 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="border border-customFooter h-6 w-6 flex justify-center items-center px-2 rounded-md">
                      {item.quantity}
                    </span>
                    <button
                      className="border border-gray-300 px-2 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-center sm:gap-2">
                    <p className="text-[10px] sm:text-base">
                      Rs. {item.price * item.quantity}
                    </p>
                    <img
                      src={bucket}
                      alt="Remove item"
                      className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-6 ml-2 sm:ml-6 text-center text-lg">
                Your cart is empty.
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Cart Totals */}
        <div className="bg-custom w-full sm:max-w-md px-6 sm:px-12 py-6 sm:py-8 flex flex-col space-y-4 h-fit">
          <h2 className="text-xl sm:text-2xl font-bold text-center">
            Cart Totals
          </h2>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Subtotal</p>
            <p>Rs. {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base">
            <p>Tax (10%)</p>
            <p>Rs. {totalTax.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-sm sm:text-base">
            <p>Total</p>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          <button
            className={`${
              cartItems.length === 0 ? "bg-gray-400" : "bg-orange-400"
            } px-8 py-2 text-white rounded-md`}
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
          {totalAmount !== null && (
            <div className="bg-[#4CAF50] text-white p-4 mt-4 text-center rounded text-sm sm:text-base">
              {checkoutMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
