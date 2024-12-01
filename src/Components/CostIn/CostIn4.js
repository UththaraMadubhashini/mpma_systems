import React from 'react';

function ApprovalForm() {
  return (
    <div className="mt-6">
      <form>
        {/* Prepared By */}
        <div className="mb-4 mt-6">
          <label htmlFor="preparedBy" className="block text-lg font-bold text-gray-700 mb-1">
            Prepared By:
          </label>
          <input
            type="text"
            id="preparedBy"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter name"
          />
        </div>

        {/* Checked By */}
        <div className="mb-4">
          <label htmlFor="checkedBy" className="block text-lg font-bold text-gray-700 mb-1">
            Checked By:
          </label>
          <input
            type="text"
            id="checkedBy"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter name"
          />
        </div>

        {/* Forwarded For Approval */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Forwarded For Your Approval:</h3>

          <div className="mb-3">
            <label htmlFor="ctm" className="block text-lg font-bold text-gray-700 mb-1">
              C. T. M:
            </label>
            <input
              type="text"
              id="ctm"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dctm1" className="block text-lg font-bold text-gray-700 mb-1">
              D. C. T. M 1:
            </label>
            <input
              type="text"
              id="dctm1"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dctm2" className="block text-lg font-bold text-gray-700 mb-1">
              D. C. T. M 2:
            </label>
            <input
              type="text"
              id="dctm2"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tm" className="block text-lg font-bold text-gray-700 mb-1">
              T. M:
            </label>
            <input
              type="text"
              id="tm"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label htmlFor="accountant" className="block text-lg font-bold text-gray-700 mb-1">
              Accountant:
            </label>
            <input
              type="text"
              id="accountant"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ApprovalForm;
