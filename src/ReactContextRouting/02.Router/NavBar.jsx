import { NavLink, Outlet } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <div className="bg-amber-400 flex px-6 py-3 item-center justify-between shadow-md ">
        
        <NavLink
        // className={({isActive})=> isActive?'custom-active link':'link'}
        to="/" className="text-2xl font-bold text-white hover:text-black">
          Logo
        </NavLink>
        <div>
          <ul className="flex space-x-6">
            <li>
              <NavLink className="text-white hover:text-black font-medium" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-black font-medium"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-black font-medium"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-black font-medium"
                to="/user/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-black font-medium"
                to="/college"
              >
                College
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-black font-medium"
                to="/users"
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white hover:text-black font-medium"
                to="/users/list"
              >
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
