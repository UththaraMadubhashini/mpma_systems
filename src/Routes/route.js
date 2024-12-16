// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "../Components/Layouts/Layout";
// import Course from "../Pages/course"
// import Batch from "../Pages/batch"



// const Routers = () => {
//   return (
//     <Routes>
//         <Route path="/" element={<Layout/>} />
//         <Route path="/course" element={<Course/>} />
//         <Route path="/batch" element={<Exam/>} />
//     </Routes>
//   );
// };

// export default Routers;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layout";
import Course from "../Pages/Course_Batch/subCourseHome"
import Dashboard from "../Pages/Dashboard";
import CourseRegistration from "../Pages/Course_Batch/courseRegistration";
import BatchRegistration from "../Pages/Course_Batch/batchRegistration";
import InstituteSetup from "../Pages/Administration/institute_setup";
import Administration from "../Pages/Administration/subAdminHome";

const Routers = () => {
  return (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course-registration" element={<CourseRegistration />} />
        <Route path="/batch-registration" element={<BatchRegistration />} />
        
      </Route>

      <Route>
        <Route path="/institute-setup" element={<InstituteSetup />} />
        <Route path="/administration" element={<Administration />} />
      </Route>
    </Routes>
  );
};

export default Routers;
