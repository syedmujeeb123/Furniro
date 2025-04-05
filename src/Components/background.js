import React from "react";
import Shopping_img from "./Images/shopimg.png";

export default function Background({ breadcrumb }) {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <img
        src={Shopping_img}
        alt="Shopping Background"
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[300px] object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-black/50 px-4 py-2 rounded-md hidden md:block">
        {breadcrumb}
      </div>
    </div>
  );
}
