function AddUser({ setUser }) {
  return (
    <div className="m-4 p-1">
      <h3>Add User</h3>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 m-1.5"
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter User Name"
      />
      <hr />
    </div>
  );
}
export default AddUser;
