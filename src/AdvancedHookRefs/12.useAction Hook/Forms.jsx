import { useActionState } from "react";

function Form() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    // console.log("HandleSubmit called", name, password);
    if (name && password) {
      return { message: "Data Submitted", name, password };
    } else {
      return { error: "Failed to Submit. Enter proper data" };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit);
  console.log(data);
  return (
    <div>
      <h1>useAction State Hook in React Js</h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="Enter UserName"
          name="name"
        />
        <br /> <br />
        <input
          defaultValue={data?.password}
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <br /> <br />
        <button disabled={pending}>Submit Data</button>
        <br />
        <h3>Name : {data?.name}</h3>
        <h3>Password : {data?.password}</h3>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
    </div>
  );
}
export default Form;
