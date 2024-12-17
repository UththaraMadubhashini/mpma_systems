import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Exam from "../Pages/ExamCertificate/exam";
import Academic from "../Pages/ExamCertificate/academic";
import Attendance from "../Pages/ExamCertificate/attendance";
import Payment from "../Pages/ExamCertificate/payment";
import Finallist from "../Pages/ExamCertificate/finallist";
import StudentManagement from "../Pages/student/studentManagement";
import Login from "../Pages/student/login";
import LoginNew from "../Pages/student/loginnew";
import Application1 from "../Pages/student/application1";
import Application2 from "../Pages/student/application2";
import Application3 from "../Pages/student/application3";
import Lecturermanagement from "../Pages/Lecturer/lecturermanagement";
import Form1 from "../Pages/Lecturer/form1";
import Form2 from "../Pages/Lecturer/form2";
import Form3 from "../Pages/Lecturer/form3";


const Routers = () => {
  return (
    <Routes>
      {/* Layout as the parent wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes inside the Layout */}
        <Route index element={<div>Welcome to the Dashboard</div>} /> {/* Default route */}
        <Route path="exam" element={<Exam />} />
        <Route path="academic" element={<Academic/>}/>
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="finallist" element={<Finallist/>}/>
        <Route path="studentManagement" element={<StudentManagement />} />
        <Route path="login" element={<Login />} />
        <Route path="loginnew" element={<LoginNew />} />
        <Route path="application1" element={<Application1 />} />
        <Route path="application2" element={<Application2 />} />
        <Route path="application3" element={<Application3/>}/>
        <Route path="lecturermanagement" element={<Lecturermanagement/>}/>
        <Route path="form1" element={<Form1/>}/>
        <Route path="form2" element={<Form2/>}/>
        <Route path="form3" element={<Form3/>}/>

        
        {/* Add additional routes as needed */}
      </Route>
    </Routes>
  );
};

export default Routers;