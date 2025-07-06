import { useState } from "react";
function Derived() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const handleAddUser = () => {
    setUsers([...users, user]);
  };
  console.log(users);

  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;
  return (
    <div className="m-10">
      <h1 className="bg-blue-300">Total User :{total}</h1>
      <h1 className="bg-blue-300">Last User :{last}</h1>
      <h1 className="bg-blue-300">Unique User :{unique}</h1>
      <input
        onChange={(event) => setUser(event.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 m-1.5"
        type="text"
        placeholder="Add new user"
      />
      <button
        onClick={handleAddUser}
        className="bg-blue-500 text-white px-4 py-2 rounded-md m-1.5"
      >
        Add User
      </button>
      {users.map((item, index) => {
        return <h4 key={index}>{item}</h4>;
      })}
    </div>
  );
}
export default Derived;
