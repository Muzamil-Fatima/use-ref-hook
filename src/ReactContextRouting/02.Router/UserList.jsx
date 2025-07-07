import { Link } from "react-router-dom";

export default function UserList() {
  const userData = [
    { id: 1, name: "Muzamil" },
    { id: 2, name: "Fatima" },
    { id: 3, name: "Asma" },
    { id: 4, name: "Noor" },
    { id: 5, name: "Ali" },
    { id: 6, name: "Ahmad" },
  ];

  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User List Page</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={`/users/${item.id}`}>{item.name}</Link>
          </h4>
        </div>
      ))}
      <h1>User List with Name in URL </h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={"/users/" + item.id + "/" + item.name}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
