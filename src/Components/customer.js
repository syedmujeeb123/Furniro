import React from "react";
import Right_around from "./Images/right_around.svg";
import Shipping from "./Images/shipping.svg";
import Support from "./Images/support.svg";
import Cup from "./Images/cup.svg";

export default function Customer() {
  return (
    <div className="flex bg-customBg mt-14 justify-center gap-14 py-14 px-8">
      <div className="flex">
        <img src={Cup} alt={Cup} style={{ height: "2.6em" }} />
      </div>

      <div className="flex ml-14">
        <img
          src={Right_around}
          alt={Right_around}
          style={{ height: "2.6em" }}
        />
      </div>

      <div className="flex ml-14">
        <img src={Shipping} alt={Shipping} style={{ height: "2.6em" }} />
      </div>

      <div className="flex ml-14">
        <img src={Support} alt={Support} style={{ height: "2.6em" }} />
      </div>
    </div>
  );
}
