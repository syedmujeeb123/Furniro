import React from "react";
import Location from "./Images/location.svg";
import Call from "./Images/call.svg";
import Watch from "./Images/watch.svg";

export default function Touch() {
  return (
    <div>
      <div className="text-center space-y-4 mt-20">
        <h1 className="text-blackRgba font-bold text-2xl">
          Get In Touch With Us
        </h1>
        <p className="w-1/2 mx-auto text-customFooter">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="grid grid-cols-2  justify-center mt-20 mx-72">
        {/*1 div*/}
        <div className="space-y-6">
          <div className="flex gap-4">
            <div>
              <img src={Location} alt="Location Icon" />
            </div>
            <div className="">
              <h2 className="font-bold">Address</h2>
              <p className="max-w-48">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <img src={Call} alt="Call Icon" />
            </div>
            <div className="">
              <h2 className="font-bold">Phone</h2>
              <p className="max-w-48 flex flex-col">
                <div>Mobile: +(84) 546-6789</div>
                <div>Hotline: +(84) 456-6789</div>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <img src={Watch} alt="Watch Icon" />
            </div>
            <div className="">
              <h2 className="font-bold">Working Time</h2>
              <p className="max-w-48">
                <div>Monday-Friday: 9:00 - 22:00 </div>
                <div>Saturday-Sunday: 9:00 - 21:00</div>
              </p>
            </div>
          </div>
        </div>
        {/*2 div*/}
        <form className="space-y-6 -mt-1.5">
          <label htmlFor="name1" className="block text-gray-700 font-bold">
            Your Name
          </label>
          <input
            type="text"
            id="name1"
            placeholder="Abc"
            className="border border-gray-300 px-12 py-2 rounded"
          />

          <label htmlFor="name2" className="block text-gray-700 font-bold">
            Email address
          </label>
          <input
            type="text"
            id="name2"
            placeholder="abc@gmail.com"
            className="px-12  py-2 border border-gray-300 p-2 rounded"
          />

          <label htmlFor="name3" className="block text-gray-700 font-bold">
            Subject
          </label>
          <input
            type="text"
            id="name3"
            placeholder="This is an optional"
            className="px-12 py-2 border border-gray-300 p-2 rounded"
          />

          <label htmlFor="message" className="block text-gray-700 font-bold">
            Message
          </label>
          <textarea
            id="message"
            className="w-96 h-22 border border-gray-300 p-2 rounded resize"
            placeholder="Write your message here..."
          ></textarea>
          <button className="bg-customYellow text-sm text-white py-1 px-10 rounded-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
