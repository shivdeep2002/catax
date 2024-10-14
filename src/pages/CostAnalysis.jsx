import React from "react";

function CostAnalysis() {
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
              <th className="py-2">Info</th>
              <th className="py-2">Holding Peroid</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Cost (INR)</th>
              <th className="py-2">Gain</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            <tr className="">
              <td className="py-2 flex items-center gap-2">
                <span className="text-green-500">+</span>
                <span>Sep 10, 2024 02:53 AM</span>
              </td>
              <td className="py-2 ">
                <span className="">Invested in ALGO</span>
              </td>
              <td className="py-2">N/A</td>
              <td className="py-2">0.0004ALGO</td>
              <td className="py-2 flex gap-3">₹0.0043</td>
              <td className="py-2 ">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CostAnalysis;
