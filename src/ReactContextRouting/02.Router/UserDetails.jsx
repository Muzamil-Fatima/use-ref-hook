import { useParams, Link } from "react-router-dom";

export default function UserDetails() {
  const paramsData = useParams();

  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Details Page</h1>
      <h2>User ID is: {paramsData.id}</h2>
      <h3>
        <Link to="/users">Back</Link>
      </h3>
    </div>
  );
}
