import { NavLink, Outlet } from "react-router";

export default function College() {
  return (
    <div className=" text-center">
      <h1 className="text-2xl  font-bold">
        College Page
      </h1>
      <NavLink
        className="m-2 font-medium"
        to="student"
      >
        Student
      </NavLink>
      <NavLink
        className=" m-2 font-medium"
        to="department"
      >
        Department
      </NavLink>
      <NavLink
        className="m-2 font-medium"
        to="collegeDetails"
      >
        College Details
      </NavLink>
      <Outlet />
    </div>
  );
}
