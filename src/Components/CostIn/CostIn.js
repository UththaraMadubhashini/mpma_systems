import React, { useState } from "react";
import CostIn2 from "./CostIn2";
import CostIn3 from "./CostIn3"
import CostIn4 from "./CostIn4"
const CompleteCourseManagement = () => {
  const [courseInfo, setCourseInfo] = useState({
    courseName: "",
    participants: "",
    duration: "",
    customerDivision: "",
  });

  const [developmentRows, setDevelopmentRows] = useState([
    { description: "Resource Personnel - no of panel meetings", nos: "", rate: "" },
    { description: "Resource Personnel - no of personnel", nos: "", rate: "" },
    { description: "Value of refreshment", nos: "", rate: "" },
    { description: "Documentation", nos: "", rate: "" },
    { description: "Transport (Km)", nos: "", rate: "" },
  ]);

  const [deliveryRows, setDeliveryRows] = useState([
    { role: "S. T. M", hrs: "", rate: "" },
    { role: "T. M", hrs: "", rate: "" },
    { role: "A. T. M", hrs: "", rate: "" },
    { role: "T. O", hrs: "", rate: "" },
    { role: "Laborer", hrs: "", rate: "" },
  ]);

  const handleCourseInfoChange = (field, value) => {
    setCourseInfo({ ...courseInfo, [field]: value });
  };

  const handleTableInputChange = (rows, setRows, index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleAddDeliveryRow = () => {
    setDeliveryRows([...deliveryRows, { role: "", hrs: "", rate: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Course Information:", courseInfo);
    console.log("Course Development Data:", developmentRows);
    console.log("Course Delivery Data:", deliveryRows);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <div className="mt-10"> 

<div className="max-w-3xl mx-auto mt-20 p-6">
<h1 className="text-2xl font-bold text-blue-500 ">Course & Batch Management</h1>
<h1 className="text-sm font-bold text-gray-500">Home/Course & Batch Management/Cost-In</h1>
</div>
   
    <div className="max-w-3xl mx-auto mt-[-20px] p-6 bg-white shadow border-black border-1 rounded-lg">
     

      {/* Course Information */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Course Information</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Course Name"
            value={courseInfo.courseName}
            onChange={(e) => handleCourseInfoChange("courseName", e.target.value)}
          />
          <input
            type="number"
            className="w-full p-2 border rounded"
            placeholder="No of Participants"
            value={courseInfo.participants}
            onChange={(e) => handleCourseInfoChange("participants", e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Duration"
            value={courseInfo.duration}
            onChange={(e) => handleCourseInfoChange("duration", e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Customer / Division"
            value={courseInfo.customerDivision}
            onChange={(e) =>
              handleCourseInfoChange("customerDivision", e.target.value)
            }
          />
        </div>
      </div>

      {/* Course Development Work */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">A. Course Development Work</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Description</th>
              <th className="border p-2">Nos</th>
              <th className="border p-2">Rate per hr / Cost</th>
            </tr>
          </thead>
          <tbody>
            {developmentRows.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="border p-2">{row.description}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.nos}
                    onChange={(e) =>
                      handleTableInputChange(developmentRows, setDevelopmentRows, index, "nos", e.target.value)
                    }
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.rate}
                    onChange={(e) =>
                      handleTableInputChange(developmentRows, setDevelopmentRows, index, "rate", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Course Delivery */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">B. Course Delivery</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Human Resource</th>
              <th className="border p-2">Hrs</th>
              <th className="border p-2">Rate per hr / Cost</th>
            </tr>
          </thead>
          <tbody>
            {deliveryRows.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={row.role}
                    onChange={(e) =>
                      handleTableInputChange(deliveryRows, setDeliveryRows, index, "role", e.target.value)
                    }
                    placeholder="Role"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.hrs}
                    onChange={(e) =>
                      handleTableInputChange(deliveryRows, setDeliveryRows, index, "hrs", e.target.value)
                    }
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={row.rate}
                    onChange={(e) =>
                      handleTableInputChange(deliveryRows, setDeliveryRows, index, "rate", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="mt-2 bg-gray-200 text-blue-600 px-3 py-1 rounded hover:bg-gray-300"
          onClick={handleAddDeliveryRow}
        >
          Add More
        </button>
      </div>

      <CostIn2/> 
      <CostIn3/>    
      <CostIn4/> 
      {/* Submit Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
    </div>
  );
};

export default CompleteCourseManagement;
