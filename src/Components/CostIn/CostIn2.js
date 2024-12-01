import React, { useState } from "react";

const CourseManagementForm = () => {
  const [slpaResources, setSlpaResources] = useState([
    { category: "Category - A", hrs: "", rate: "" },
    { category: "Category - B", hrs: "", rate: "" },
    { category: "Category - C", hrs: "", rate: "" },
  ]);

  const [outsideResources, setOutsideResources] = useState([
    { category: "Category - A", hrs: "", rate: "" },
    { category: "Category - B", hrs: "", rate: "" },
    { category: "Category - C", hrs: "", rate: "" },
    { category: "Co-ordination (if any)", hrs: "", rate: "" },
  ]);

  const handleInputChange = (rows, setRows, index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = (setRows) => {
    setRows((prevRows) => [...prevRows, { category: "", hrs: "", rate: "" }]);
  };

  /*const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SLPA Resources:", slpaResources);
    console.log("Outside Resources:", outsideResources);
    alert("Form submitted! Check the console for details.");
  };*/

  return (
    <div>
      

      {/* SLPA Resources Personnel */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">SLPA - Resources Personnel</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Category</th>
              <th className="border p-2">Hrs</th>
              <th className="border p-2">Rate per hr. / Cost</th>
            </tr>
          </thead>
          <tbody>
            {slpaResources.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="border p-2">{row.category}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.hrs}
                    onChange={(e) =>
                      handleInputChange(slpaResources, setSlpaResources, index, "hrs", e.target.value)
                    }
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.rate}
                    onChange={(e) =>
                      handleInputChange(slpaResources, setSlpaResources, index, "rate", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-2 bg-gray-200 text-blue-600 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => handleAddRow(setSlpaResources)}
        >
          Add More
        </button>
      </div>

      {/* Outside Resources Personnel */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Outside - Resources Personnel</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Category</th>
              <th className="border p-2">Hrs</th>
              <th className="border p-2">Rate per hr. / Cost</th>
            </tr>
          </thead>
          <tbody>
            {outsideResources.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="border p-2">{row.category}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.hrs}
                    onChange={(e) =>
                      handleInputChange(outsideResources, setOutsideResources, index, "hrs", e.target.value)
                    }
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.rate}
                    onChange={(e) =>
                      handleInputChange(outsideResources, setOutsideResources, index, "rate", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-2 bg-gray-200 text-blue-600 px-3 py-1 rounded hover:bg-gray-300"
          onClick={() => handleAddRow(setOutsideResources)}
        >
          Add More
        </button>
      </div>


    </div>
  );
};

export default CourseManagementForm;
