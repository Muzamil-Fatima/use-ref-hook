import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";
import NavBar from "./NavBar";
import College from "./College";
import CollegeDetails from "./CollegeDetails";
import Student from "./Student";
import Department from "./Department";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
// import PageNotFound from "./PageNotFound";
export default function RouterReact() {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/list" element={<UserList />} />
          <Route path="users/:id/:name?" element={<UserDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* Add prefix in Login */}
          <Route path="user">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Login />} />
            <Route path="forgot" element={<Login />} />
          </Route>
        </Route>

        <Route path="college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="collegeDetails" element={<CollegeDetails />} />
        </Route>
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to="/user/login" />} />
      </Routes>
    </div>
  );
}
