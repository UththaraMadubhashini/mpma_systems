import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";



const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>} />
    </Routes>
  );
};

export default Routers;
