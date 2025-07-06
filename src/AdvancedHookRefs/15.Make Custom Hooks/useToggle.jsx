import { useState } from "react";
const useToggle = (defaultVal) => {
  const [value, setValue] = useState(defaultVal);
  function toggleVal(val) {
    if (typeof val != "boolean") {
      console.log("if");
      setValue(!value);
    } else {
      console.log("else");
      setValue(val);
    }
  }
  return [value, toggleVal];
};
export default useToggle;
