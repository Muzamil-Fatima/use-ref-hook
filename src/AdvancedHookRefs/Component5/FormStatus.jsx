import { useFormStatus } from "react-dom";
function FormStatus() {
  const handleSubmit = async () => {
    new Promise((res) => setTimeout(res, 5000));
    console.log("Form Submitted");
  };

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input
          className="border border-gray-300 rounded-md px-4 py-2 m-1.5"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="border border-gray-300 rounded-md px-4 py-2 m-1.5"
          type="text"
          placeholder="Enter Password"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-1.5"
          disabled={pending}
        >
          {pending ? "Submitting..." : "submit"}
        </button>
      </div>
    );
  }
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold m-4">
        useFormStatus Hook in React JS 19
      </h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
}
export default FormStatus;
