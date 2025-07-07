import { NavLink, Outlet, Link } from "react-router-dom";

export default function College() {
  return (
    <div className=" text-center">
      <h1 className="text-2xl  font-bold">College Page</h1>
      <h3>
        <Link className="text-blue-500 underline hover:text-red-500" to="/">
          Go Back to Home Page
        </Link>
      </h3>
      <NavLink className="m-2 font-medium" to=".">
        Student
      </NavLink>
      <NavLink className=" m-2 font-medium" to="department">
        Department
      </NavLink>
      <NavLink className="m-2 font-medium" to="collegeDetails">
        College Details
      </NavLink>
      <Outlet />
    </div>
  );
}
