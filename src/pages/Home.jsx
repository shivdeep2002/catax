import React, { useState } from "react";
import { FaArrowRight, FaEdit, FaLink, FaRegEdit } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Details from "./Details";
import Ledger from "./Ledger";
import CostAnalysis from "./CostAnalysis";

function Home() {
  const [editeComp, setEditeComp] = useState(false);
  const [detalsaCom, setDetalsComp] = useState(false);
  const [allFields, setallFields] = useState("Details");

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center w-[90%] ">
            <span>Sep 10, 2024</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[90%] "></div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col justify-center items-center relative gap-1">
          <Link
            to="#"
            className="flex justify-between border bg-[#F4F4F4] hover:bg-[#FFF3F9] px-4 h-20 items-center w-[90%] group cursor-pointer"
            onClick={() => setDetalsComp(!detalsaCom)}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="hidden group-hover:block w-6 h-6"
              />
              <img
                className="h-6 w-6 group-hover:hidden"
                src="/reward.png"
                alt="Reward Icon"
              />
              <div className="flex flex-col items-center">
                <span className="text-sm">Reward</span>
                <span className="text-xs text-[#636363]">2:53 AM</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img className="h-6" src="/datbase.png" alt="Database Icon" />
              <FaArrowRight className="text-xs text-[#3FBB00]" />
              <img className="h-6" src="trangle.png" alt="Triangle Icon" />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col leading-3">
                <span className="text-xs">Kraken (2)</span>
                <span>
                  {" "}
                  <span className="text-lg">+</span> 0.00040271 ALGO
                </span>
                <span className="pl-5 text-sm text-gray-600">₹ 0.0043</span>
              </div>
            </div>
            <div
              className={`w-10 ${
                editeComp ? "hidden" : "block"
              } group-hover:hidden`}
            ></div>
            <div
              className={`gap-2 ${
                editeComp ? "block" : "hidden"
              } group-hover:block`}
            >
              <div className="flex gap-2 w-10">
                <span
                  className={`w-4 group-hover:hidden ${
                    editeComp ? "block" : ""
                  }`}
                ></span>
                <IoIosInformationCircleOutline className="text-[#A54D79] hidden group-hover:block" />
                <HiDotsHorizontal
                  className={`text-sm text-[#616161] ${
                    editeComp ? "block" : "hidden"
                  } group-hover:block`}
                  onClick={() => setEditeComp(!editeComp)}
                />
              </div>
            </div>

            {editeComp && (
              <div className=" w-40 flex flex-col items-start border absolute right-20 top-14 bg-[#F4F4F4]">
                <div className="pb-6 flex flex-col pt-2">
                  <button className="flex items-center gap-3 w-40 hover:bg-[#A54D79] p-2">
                    <FaRegEdit />
                    Edit
                  </button>
                  <button className="flex items-center gap-3 w-40  hover:bg-[#A54D79] p-2">
                    <IoCopyOutline />
                    Dublicate
                  </button>
                  <button className="flex items-center gap-3 w-40 hover:bg-[#A54D79] p-2 ">
                    <MdDelete className="text-[#DC3545]" />
                    Delete
                  </button>
                </div>
                <button className="flex  gap-2 items-center border-t-2 w-full p-2">
                  View in context
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
            )}
          </Link>

          {detalsaCom && (
            <div className="w-[90%] px-2h bg-[#F4F4F4] border p-4">
              <div className="flex justify-between items-center">
                <div className="text-sm flex items-center gap-6">
                  <Link
                    className={`${
                      allFields === "Details"
                        ? "border-b-2 border-[#A54D79] text-[#A54D79]"
                        : ""
                    }`}
                    onClick={() => setallFields("Details")}
                  >
                    Details
                  </Link>
                  <Link
                    className={`${
                      allFields === "Ledger"
                        ? "border-b-2 border-[#A54D79] text-[#A54D79]"
                        : ""
                    }`}
                    onClick={() => setallFields("Ledger")}
                  >
                    Ledger
                  </Link>
                  <Link
                    className={`${
                      allFields === "Cost Analysis"
                        ? "border-b-2 border-[#A54D79] text-[#A54D79]"
                        : ""
                    }`}
                    onClick={() => setallFields("Cost Analysis")}
                  >
                    Cost Analysis
                  </Link>
                </div>
                <div className="flex gap-3">
                  <div className="">
                    <span>=77A89F...</span>
                  </div>
                  <span>
                    <FaLink size={15} className="text-red-400 font-normal" />
                  </span>
                  <span>
                    <FaEdit />
                  </span>
                  <span>
                    <MdDeleteOutline className="text-red-400 font-normal" />
                  </span>
                </div>
              </div>
              <>
                {allFields === "Details" && <Details />}
                {allFields === "Ledger" && <Ledger />}
                {allFields === "Cost Analysis" && <CostAnalysis />}
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
