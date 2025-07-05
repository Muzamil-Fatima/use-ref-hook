function Child({ displayName, name, onClick }) {
  // const name = "Fatima";
  return (
    <div>
      <button
        onClick={() => displayName(name)}
        className="bg-amber-300 btn btn-primary border-solid border-2 border-gray-500 m-2 p-2 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Display Name
      </button>
      <button
        onClick={() => onClick()}
        className="bg-amber-300 btn btn-primary border-solid border-2 border-gray-500 m-2 p-2 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Get User
      </button>
    </div>
  );
}
export default Child;
