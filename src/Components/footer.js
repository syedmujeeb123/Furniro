import React from "react";

export default function Footer() {
  return (
    <div className="bg-white-100 px-6 sm:px-10 md:px-14 py-10 max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-8">
        <div>
          <h2 className="font-bold text-lg">Funiro.</h2>
          <div className="mt-6 sm:mt-10">
            <p className="mt-2 text-customFooter text-sm">
              400 University Drive Suite 200
              <br />
              Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-customFooter text-sm sm:text-base font-semibold">
            Links
          </h2>
          <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-8 font-bold text-sm">
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

        <div>
          <h2 className="text-customFooter text-sm sm:text-base font-semibold">
            Help
          </h2>
          <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-8 font-bold text-sm">
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

        <div>
          <h2 className="text-customFooter text-sm sm:text-base font-semibold">
            Newsletter
          </h2>
          <form className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border-b-2 border-black w-full sm:w-auto sm:flex-1"
            />
            <button
              type="submit"
              className="font-bold border-b-2 border-black p-2 text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <hr className="mt-10 border-gray-300" />

      <div className="mt-6 text-start text-gray-600 text-sm">
        <p>2023 Funiro. All rights reserved.</p>
      </div>
    </div>
  );
}
