import React from "react";
export default function Buttons() {
  return (
    <div className="flex gap-x-4 justify-center mt-14 cursor-pointer">
      <a className="bg-brownCustom px-4 py-2 rounded-md text-white">1</a>
      <a className="bg-customBg px-4 py-2 rounded-md">2</a>
      <a className="bg-customBg px-4 py-2 rounded-md">3</a>
      <a className="bg-customBg px-4 py-2 rounded-md">Next</a>
    </div>
  );
}
