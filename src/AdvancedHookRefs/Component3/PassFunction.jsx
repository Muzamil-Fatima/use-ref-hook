import Child from "./Child";

function PassFunction() {
  const displayName = (name) => {
    alert(name);
  };

  const getUser = () => {
    alert("get User function called");
  };
  return (
    <div className="m-7">
      <h1 className="text-2xl text-shadow-blue-200 font-bold">
        Pass Function one Component to other
      </h1>
      <Child displayName={displayName} name="Fatima" onClick={getUser} />
      <Child displayName={displayName} name="Asma" onClick={getUser} />
      <Child displayName={displayName} name="Muzamil" onClick={getUser} />
      <Child displayName={displayName} name="Farhan" onClick={getUser} />
    </div>
  );
}

export default PassFunction;
