import React, { useState } from "react";
import bucket from "./Images/bucket.svg";

export default function CartPage({ cartItems = [], setCartItems }) {
  // Define tax rate
  const taxRate = 0.1; // 10% tax rate
  const [totalAmount, setTotalAmount] = useState(null); // State for total amount

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate total tax
  const totalTax = subtotal * taxRate;

  // Calculate total amount payable
  const total = subtotal + totalTax;

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Handle checkout button click
  const handleCheckout = () => {
    setTotalAmount(total); // Set the total amount when checkout is clicked
  };

  return (
    <div className="">
      <div className="flex gap-12 pt-16">
        <div className="flex flex-col">
          {/* Navigation header for cart items */}
          <nav className="bg-customBeige ml-20 h-14 w-100">
            <ul className="font-bold flex space-x-20 px-32 py-4">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </nav>

          {/* Display cart items */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-around ml-24 mt-12 gap-12 items-center"
              >
                <img src={item.image} alt={item.name} width="80px" />
                <p>{item.name}</p>
                <p>Rs. {item.price}</p>
                <a className="border border-customFooter h-6 w-6 flex justify-center items-center px-2 rounded-md">
                  {item.quantity}
                </a>
                <p className="ml-4">Rs. {item.price * item.quantity}</p>
                <img
                  src={bucket}
                  alt="Remove item"
                  className="cursor-pointer"
                  onClick={() => removeFromCart(item.id)} // Call removeFromCart with item id
                />
              </div>
            ))
          ) : (
            <p className="ml-20 mt-12">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals */}
        <div className="bg-custom px-16 py-8 flex flex-col space-y-4">
          <h2 className="text-2xl font-bold flex justify-center">
            Cart Totals
          </h2>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>Rs. {subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax (10%)</p>
            <p>Rs. {totalTax.toFixed(2)}</p> {/* Display tax amount */}
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>Rs. {total.toFixed(2)}</p> {/* Display total amount */}
          </div>
          <button
            className="bg-orange-400 px-8 py-2 text-white"
            onClick={handleCheckout} // Call handleCheckout on button click
          >
            Proceed to Checkout
          </button>
          {totalAmount !== null && (
            <div className="bg-[#4CAF50] text-white p-4 mt-4 flex justify-center">
              Total Amount: Rs. {totalAmount.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
