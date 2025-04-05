import React from "react";
import Right_around from "./Images/right_around.svg";
import Shipping from "./Images/shipping.svg";
import Support from "./Images/support.svg";
import Cup from "./Images/cup.svg";

export default function Customer() {
  return (
    <div className="flex flex-wrap bg-customBg mt-14 justify-center gap-y-8 gap-x-8 md:gap-x-14 py-14 px-4 sm:px-6 md:px-8">
      <div className="flex justify-center w-1/2 sm:w-auto">
        <img src={Cup} alt="Cup" style={{ height: "2.6em" }} />
      </div>

      <div className="flex justify-center w-1/2 sm:w-auto">
        <img
          src={Right_around}
          alt="Right Around"
          style={{ height: "2.6em" }}
        />
      </div>

      <div className="flex justify-center w-1/2 sm:w-auto">
        <img src={Shipping} alt="Shipping" style={{ height: "2.6em" }} />
      </div>

      <div className="flex justify-center w-1/2 sm:w-auto">
        <img src={Support} alt="Support" style={{ height: "2.6em" }} />
      </div>
    </div>
  );
}
