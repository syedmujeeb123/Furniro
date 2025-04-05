import React from "react";
import Filter_icon from "./Images/filter.png";
import Dorts from "./Images/dots.svg";
import Payment from "./Images/payment.svg";

export default function Header({ cartCount }) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-3 bg-custom-light flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      {/* Left Section */}
      <div className="flex flex-wrap gap-3 sm:gap-4 items-center text-sm md:text-base">
        <img src={Filter_icon} className="w-5 h-5" alt="Filter Icon" />
        <div className="font-semibold">Filter</div>
        <img src={Dorts} className="w-5 h-5" alt="Dots Icon" />
        <img src={Payment} className="w-5 h-5" alt="Payment Icon" />
        <div className="hidden md:block">|</div>
        <div>Showing 1-16 of 32 results</div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap gap-2 sm:gap-3 items-center text-sm md:text-base">
        <div>Show</div>
        <div className="bg-white px-3 py-1 rounded-md">{cartCount}</div>
        <div>Sort by</div>
        <div className="bg-white px-3 py-1 rounded-md">Default</div>
      </div>
    </div>
  );
}
