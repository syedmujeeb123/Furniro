import React from "react";

export default function Footer() {
  return (
    <div className="bg-white-100 px-14 py-10 max-w-84">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <h2 className="font-bold">Funiro.</h2>
          <div className="mt-10">
            <p className="mt-2 text-customFooter">
              400 University Drive Suite 200
              <br />
              Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
        </div>

        <div className="ml-20">
          <h2 className="text-customFooter">Links</h2>

          <ul className="mt-8 space-y-8 font-bold">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-600 hover:underline">
                About
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="-ml-18">
          <h2 className="text-customFooter">Help</h2>

          <ul className="mt-8 space-y-8 font-bold">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        <div className="-ml-20">
          <h2 className="text-customFooter">Newsletter</h2>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border-b-2 border-black w-full"
            />
            <button
              type="submit"
              className="mt-2 ml-4 font-bold border-b-2 border-black p-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <hr className="mt-8"></hr>

      <div className="mt-8 text-start text-gray-600">
        <p>2023 Funiro. All rights reserved.</p>
      </div>
    </div>
  );
}
