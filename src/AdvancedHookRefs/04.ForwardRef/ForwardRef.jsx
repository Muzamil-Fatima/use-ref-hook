import Input from "./Input";
import { useRef } from "react";

function ForwardRef() {

  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
  };
  
  return (
    <div>
      <h1>Forward Ref</h1>
      <Input ref={inputRef} />
      <button onClick={updateInput}>Update Input field</button>
    </div>
  );
}
export default ForwardRef;
