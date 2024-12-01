import React from "react";

function OverheadCostsForm() {
  return (
    <div className="">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Cost For Overheads - C</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Total Estimated Cost */}
        <div>
          <label className="block text-lg  text-gray-700 mb-1">
            Total Estimated Cost (A + B + C)
          </label>
        </div>
        <div>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Provision For Inflation */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Provision For Inflation - 5%
          </label>
        </div>
        <div>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Full Cost */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Full Cost
          </label>
        </div>
        <div>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* NBT */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            NBT
          </label>
        </div>
        <div>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Profit Margin */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Profit Margin - 20%
          </label>
        </div>
        <div>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Cost Fee Per Head */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Cost Fee Per Head
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
          <span className="ml-2 text-gray-700">/ 13</span>
        </div>

        {/* Total Course Fee */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Total Course Fee For The Batch of the 13 Less Participants
          </label>
        </div>
        <div>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>
      </div>
    </div>
  );
}

export default OverheadCostsForm;