import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import CostIn from "../Components/CostIn/CostIn";
import CostIn2 from "../Components/CostIn/CostIn2";
import CostIn3 from "../Components/CostIn/CostIn3";
import CostIn4 from "../Components/CostIn/CostIn4";
import Calculate from "../Pages/Calculate"
import Tariff from "../Pages/Tariff";
import Cdw from "../Pages/Cdw";
import Cd from "../Pages/Cd";
import Overheads from "../Pages/Overheads";

const Routers = () => {
  return (
    <Routes>
      {/* Layout as the parent wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes inside the Layout */}
        <Route index element={<div>Welcome to the Dashboard</div>} /> {/* Default route */}
        <Route path="costIn" element={<CostIn />} />
        {/* Add additional routes as needed */}
        <Route path="costIn2" element={<CostIn2 />} />
        <Route path="costIn3" element={<CostIn3 />} />
        <Route path="costIn4" element={<CostIn4 />} />
        <Route path="Calculate" element={<Calculate/>} />
        <Route path="Tariff" element={<Tariff/>} />
        <Route path="Cdw" element={<Cdw/>} />
        <Route path="Cd" element={<Cd/>} />
        <Route path="Overheads" element={<Overheads/>} />
      </Route>

    </Routes>
  );
};

export default Routers;
