import { Link } from "react-router";
export default function NavBar() {
  return (
    <div className="bg-amber-400 flex px-6 py-3 item-center justify-between shadow-md ">
      <Link 
      to="/"
      className="text-2xl font-bold text-white hover:text-black">
        Logo
      </Link>
      <div>
        <ul className="flex space-x-6">
          <li>
            <Link className="text-white hover:text-black font-medium" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-black font-medium"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-black font-medium"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-black font-medium"
              to="/college"
            >
              College
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
