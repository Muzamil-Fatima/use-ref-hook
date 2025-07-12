import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function Lifting() {

  const [user, setUser] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold bg-amber-300 m-6 p-4">
        Lifting stateUp
      </h1>
      <h2 className="text-2xl font-medium bg-amber-300 m-3 p-1">
        Sharing state between Component
      </h2>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </div>
    
  );
}
export default Lifting;
