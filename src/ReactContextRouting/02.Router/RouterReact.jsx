import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import NavBar from "./NavBar";
import College from "./College";
import CollegeDetails from "./CollegeDetails";
import Student from "./Student";
import Department from "./Department";
// import PageNotFound from "./PageNotFound";
export default function RouterReact() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collegeDetails" element={<CollegeDetails />} />
        </Route>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to="/Login" />} />
      </Routes>
    </div>
  );
}
