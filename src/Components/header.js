import React from "react";
import Filter_icon from "./Images/filter.png";
import Dorts from "./Images/dots.svg";
import Payment from "./Images/payment.svg";

export default function header({ cartCount }) {
  return (
    <div className="flex justify-around bg-custom-light px-2 py-4 top-0 -mt-1 items-center">
      <div className="flex gap-6">
        <img
          src={Filter_icon}
          style={{ width: "20px", height: "20px" }}
          alt={Filter_icon}
        />
        <div className="font-semibold">Filter</div>
        <img src={Dorts} alt={Dorts} />
        <img src={Payment} alt={Payment} />
        <div>|</div>
        <div className="flex">showing 1-16 of 32 results</div>
      </div>
      <div className="flex gap-4 items-center">
        <div>Show</div>
        <div className="bg-white px-4 py-1">{cartCount}</div>
        <div>Short by</div>
        <div className="bg-white px-4 py-1">Default</div>
      </div>
    </div>
  );
}
