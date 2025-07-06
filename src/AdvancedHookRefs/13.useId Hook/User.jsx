import { useId } from "react";
function User() {
  return (
    <div>
      <h1>useId Hook</h1>
      <UserForm />
      <hr />
      <UserForm />
    </div>
  );
}
export default User;

function UserForm() {
  const user = useId();
  // const password =useId();
  // const terms =useId();
  // const skills =useId();

  return (
    <div>
      <h1>useId Hook</h1>
      <form action="">
        <label htmlFor={user + "name"}>Name:</label>
        <input type="text" id={user + "name"} placeholder="Enter Your Name " />
        <br />
        <label htmlFor={user + "password"}>Password:</label>
        <input
          type="text"
          id={user + "password"}
          placeholder="Enter user password "
        />
        <br />

        <label htmlFor={user + "skills"}>Skills:</label>
        <input
          type="text"
          id={user + "skills"}
          placeholder="Enter User skill "
        />
        <br />
        <label htmlFor={user + "terms"}>Term and condition:</label>
        <input
          type="checkbox"
          id={user + "terms"}
          placeholder="Enter Your Name "
        />
        <br />
      </form>
    </div>
  );
}
