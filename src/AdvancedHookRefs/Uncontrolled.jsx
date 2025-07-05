import { useRef } from "react";
function Uncontrolled() {
  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };

  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log("useRef:", user, password);
  };

  return (
    <div className="m-5">
      <h1 className="text-2xl font-extrabold">Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="user"
        >
          Name:{" "}
        </label>
        <input
          className="border-2 border-gray-300 rounded p-2 mb-2"
          type="text"
          id="user"
          placeholder="Enter user name"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border-2 border-gray-300 rounded p-2 mb-2"
          type="password"
          id="password"
          placeholder="Enter Password"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <hr />
      <h1 className="text-2xl font-extrabold">
        Uncontrolled Component With UseRef
      </h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="user"
        >
          Name:{" "}
        </label>
        <input
          ref={userRef}
          className="border-2 border-gray-300 rounded p-2 mb-2"
          type="text"
          id="userRef"
          placeholder="Enter user name"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          ref={passwordRef}
          className="border-2 border-gray-300 rounded p-2 mb-2"
          type="password"
          id="passwordRef"
          placeholder="Enter Password"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit with Ref
        </button>
      </form>
    </div>
  );
}
export default Uncontrolled;
