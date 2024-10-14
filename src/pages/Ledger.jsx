import React from "react";
import { TiEyeOutline } from "react-icons/ti";

const Ledger = () => {
  return (
    <div>
      <p className="text-sm text-gray-500 my-4">
        Every change in your asset balances due to this transaction is listed
        below.
      </p>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-md">
              <th className="py-2">Date</th>
              <th className="py-2">Identifier</th>
              <th className="py-2">Ledger</th>
              <th className="py-2">Change</th>
              <th className="py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="py-2 flex items-center gap-2">
                <span className="text-green-500">+</span>
                <span>Sep 10, 2024 02:53 AM</span>
              </td>
              <td className="py-2 ">
                <a href="#" className="">
                  <span className="text-[#A54D79]">View txn</span>{" "}
                  <span className="text-sm text-gray-500">LP52DT-4VLA6-4ICX3G</span>
                </a>
              </td>
              <td className="py-2">ALGO Kraken (2)</td>
              <td className="py-2 text-green-500">+0.00040271</td>
              <td className="py-2 flex gap-3">
                5.98990386{" "}
                <span>
                  <TiEyeOutline size={20} className="text-gray-400" />
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ledger;
