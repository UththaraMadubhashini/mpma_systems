import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Course from "../Pages/course"
import Exam from "../Pages/exam"



const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/exam" element={<Exam/>} />
    </Routes>
  );
};

export default Routers;
