import useToggle from "./useToggle";

function Custom() {
  const [value, toggleVal] = useToggle(true);
  const [data, setData] = useToggle(true);
  console.log("val", value);
  return (
    <div>
      <button onClick={toggleVal}>Toggle Heading</button>
      <button onClick={() => toggleVal(false)}>Hide Heading</button>
      <button onClick={() => toggleVal(true)}>Show Heading</button>
      <h1>Custom Hook in React</h1>
      {value ? <h1> Custom Hook in React Js </h1> : null}
      <hr />
      <button onClick={setData}>Toggle Heading</button>
      <button onClick={() => setData(false)}>Hide Heading</button>
      <button onClick={() => setData(true)}>Show Heading</button>
      <h1>Custom Hook in React</h1>
      {value ? <h1> Custom Hook in React Js </h1> : null}
      {data ? <h1>Second Heading</h1> : null}
    </div>
  );
}
export default Custom;
