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
import Course from "../Pages/course"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Welcome to the Dashboard</div>} />
        <Route path="/course" element={<Course />} />
      </Route>
    </Routes>
  );
};

export default Routers;
