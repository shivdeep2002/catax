import React from "react";
import { TiEyeOutline } from "react-icons/ti";

const Details = () => {
  return (
    <div className="w-full flex justify-between items-start py-4">
      {/* Left Section with Arrow and Date */}
      <div className="flex items-start gap-2">
        <div className="text-green-500 text-xl">
          {/* Downward Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
        </div>
        <div>
          <span className="font-semibold">Reward</span>
          <p className="text-gray-500 text-sm">Sep 10, 2024 11:40 PM</p>
        </div>
      </div>

      {/* Right Section with Details */}
      <div className="w-1/2 bg-gray-50 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-2 bg-[#FFF3F9] p-2">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">+</span>
            <img className="h-5" src="trangle.png" alt="Triangle Icon" />
            <span className="text-sm font-medium">0.00040271 ALGO</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-5 w-5 group-hover:hidden"
              src="/reward.png"
              alt="Reward Icon"
            />
            <span className="text-sm text-gray-600">Kraken (2)</span>
            <span className="text-sm">csv</span>
            <TiEyeOutline size={20} className="text-gray-400"/>
          </div>
        </div>
        <div className="border-gray-300 pt-2 p-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Fiat value</span>
            <span>₹ 0.0043</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Gain</span>
            <span>₹ 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
