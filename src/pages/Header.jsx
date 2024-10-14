import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuTable } from "react-icons/lu";

function Header() {
  // State for each select input
  const [wallet, setWallet] = useState("");
  const [currency, setCurrency] = useState("");
  const [view, setView] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [type, setType] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");
  const [warning, setWarning] = useState("");
  const [manual, setManual] = useState("");

  return (
    <div>
      <header>
        <div className="w-full h-12 bg-[#A54D79]">
          <div className="flex justify-start text-white items-center h-full container mx-auto gap-16 text-sm ">
            <Link className="hover:text-lg hover:font-semibold">Catax</Link>
            <Link className="hover:text-xl hover:font-semibold">Dashboard</Link>
            <Link className="hover:text-xl hover:font-semibold">Wallets</Link>
            <Link className="hover:text-xl hover:font-semibold">
              Transactions
            </Link>
            <Link className="hover:text-xl hover:font-semibold">
              Tax Reports
            </Link>
            <Link className="hover:text-xl hover:font-semibold">Settings</Link>
          </div>
        </div>
      </header>

      {/* Section for Add Transaction */}
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center w-[90%] py-6">
            <div className="">
              <p className="font-semibold">Transactions</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#A64D79] text-sm flex justify-center items-center px-3 gap-2 py-2 rounded-md text-white">
                Add Transaction <FaAngleDown className="text-xs" />
              </button>
              <div className="text-[#A54D79] flex justify-center items-center gap-2">
                <span>+</span> <span>Add Filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center gap-1 py-3 w-[90%]">
            {/* Wallet Filter */}
            <div className="relative w-1/3">
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="bg-[#F4F5F7] w-full flex justify-between items-center p-3 text-sm outline-none appearance-none"
              >
                <option value="" disabled>
                  All Wallets
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown className="text-xs" />
              </div>
            </div>

            {/* Currency Filter */}
            <div className="relative w-1/3">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-[#F4F5F7] w-full flex justify-between items-center p-3 text-sm outline-none appearance-none"
              >
                <option value="" disabled>
                  All Currency
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown className="text-xs" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center text-xl gap-4">
              <LuTable />
              <MdOutlineRemoveRedEye size={25} />
            </div>

            {/* Sort By Filter */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex justify-between px-6 py-1 items-center gap-2 border rounded-full outline-none appearance-none"
              >
                <option value="" disabled>
                  Sort by recent
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown className="text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="w-full">
        <div className="flex justify-center gap-1 items-center">
          <div className="flex justify-start items-center gap-4 w-[90%] py-4">
            {/* Type Filter */}
            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`flex gap-2 justify-center items-center pl-4 pr-6 py-1 rounded-full outline-none appearance-none border w-full ${
                  type === "" ? "" : "bg-[#A54D79] text-white"
                }`}
              >
                <option value="" disabled>
                  Type
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                <FaAngleDown
                  className={`text-xs ${type === "" ? "" : "text-white"}`}
                />
              </div>
            </div>

            {/* Tag Filter */}
            <div className="relative">
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className={` flex gap-2 justify-center items-center pl-4 pr-6 py-1 rounded-full outline-none appearance-none border${
                  tag === "" ? "" : "bg-[#A54D79] text-white"
                }`}
              >
                <option value="" disabled>
                  Tag
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown
                  className={`text-xs ${tag === "" ? "" : "text-white"}`}
                />
              </div>
            </div>

            {/* Date Picker */}
            <label htmlFor="date">
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`bg-white text-gray-700 py-1 px-2 rounded-xl outline-none border ${
                  date === "" ? "" : "bg-[#A54D79] "
                }`}
              />
            </label>

            {/* Warning Filter */}
            <div className="relative">
              <select
                value={warning}
                onChange={(e) => setWarning(e.target.value)}
                className={` flex gap-2 justify-center items-center pl-4 pr-6 py-1 rounded-full outline-none appearance-none border ${
                  warning === "" ? "" : "bg-[#A54D79] text-white"
                }`}
              >
                <option value="" disabled>
                  Warning
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown
                  className={`text-xs ${warning === "" ? "" : "text-white"} `}
                />
              </div>
            </div>

            {/* Manual Filter */}
            <div className="relative">
              <select
                value={manual}
                onChange={(e) => setManual(e.target.value)}
                className={` flex gap-2 justify-center items-center pl-4 pr-6 py-1 rounded-full outline-none appearance-none border ${
                  manual === "" ? "" : "bg-[#A54D79] text-white"
                }`}
              >
                <option value="" disabled>
                  Manual
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown
                  className={`text-xs  ${manual === "" ? "" : "text-white"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
