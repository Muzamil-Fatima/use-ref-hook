import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="justify-center items-center bg-gray-100 min-h-screen text-2xl font-medium flex flex-col">
      <h1>Page Not Found</h1>
      <div className="text-blue-500 hover:underline text-base m-1.5">
        <Link className="text-blue-500 underline hover:text-red-500" to="/">
          Go to home page
        </Link>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/010/886/263/non_2x/404-error-page-free-download-free-vector.jpg"
        alt=""
      />
    </div>
  );
}
