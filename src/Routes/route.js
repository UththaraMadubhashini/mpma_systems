import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import CostIn from "../Components/CostIn/CostIn";

const Routers = () => {
  return (
    <Routes>
      {/* Layout as the parent wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes inside the Layout */}
        <Route index element={<div>Welcome to the Dashboard</div>} /> {/* Default route */}
        <Route path="costIn" element={<CostIn />} />
        {/* Add additional routes as needed */}
      </Route>
    </Routes>
  );
};

export default Routers;
