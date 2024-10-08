import React from "react";
import Shopping_img from "./Images/shopimg.png";

export default function Background({ breadcrumb }) {
  return (
    <div className="relative">
      <img src={Shopping_img} alt={Shopping_img} />
      <div className="bg-img text-bold text-4xl flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2">
        {breadcrumb}
      </div>
    </div>
  );
}
