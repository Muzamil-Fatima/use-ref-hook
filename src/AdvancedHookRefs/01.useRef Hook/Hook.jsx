import { useRef } from "react";

function Hook() {
  const inputRef = useRef(null);
  const h1Ref = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter user name here";
    inputRef.current.value = "123";
    inputRef.current.style.backgroundColor = "yellow";
  };

  const toggleHandler = () => {
    if (inputRef.current.style.display !== "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  const h1Handler = () => {
    h1Ref.current.style.color = "blue";
    h1Ref.current.style.fontSize = "30px";
    h1Ref.current.innerText = "Hello Fatima, how are you?";
  };
  return (
    <div className=" items-center justify-center h-screen">
      <h1 className="text-2xl font-bold ">useRef</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={toggleHandler}
      >
        Toggle
      </button>
      <input
        className="border-2 border-gray-300 rounded px-4 py-2 mb-4"
        ref={inputRef}
        type="text"
        placeholder="Enter user name"
      />
      <button
        onClick={inputHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Focus on Input field
      </button>

      <h1 ref={h1Ref}>Hello Fatima!</h1>
      <button
        onClick={h1Handler}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Handler
      </button>
    </div>
  );
}
export default Hook;
// Dom can't direct manipulation in react
// use state
