
import React, { useState } from "react";

const TariffForm = () => {
  const [formData, setFormData] = useState({
    panelMeetings: "",
    personnel: "",
    refreshmentValue: "",
    documentation: "",
    transportKm: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add logic to send this data to an API or another handler
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Tariff Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Resource Personnel - No of Panel Meetings</label>
          <input
            type="text"
            name="panelMeetings"
            value={formData.panelMeetings}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Resource Personnel - No of Personnel</label>
          <input
            type="text"
            name="personnel"
            value={formData.personnel}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Value of Refreshment</label>
          <input
            type="text"
            name="refreshmentValue"
            value={formData.refreshmentValue}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Documentation</label>
          <input
            type="text"
            name="documentation"
            value={formData.documentation}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Transport (Km)</label>
          <input
            type="text"
            name="transportKm"
            value={formData.transportKm}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TariffForm;
