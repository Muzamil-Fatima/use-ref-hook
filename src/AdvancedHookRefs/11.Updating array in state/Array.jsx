import { useState } from "react";
function Array() {
  const [data, setData] = useState([
    "muzamil",
    "fatima",
    "ali",
    "farhan",
    "asma ",
  ]);
  const [dataDetails, setDataDetails] = useState([
    { name: "Muzamil", age: "32" },
    { name: "Fatima", age: "20" },
    { name: "Asma", age: "26" },
  ]);
  const handleUser = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };
  const handleAge = (age) => {
    dataDetails[dataDetails.length - 1].age = age;
    console.log(dataDetails);
    setDataDetails([...dataDetails]);
  };
  return (
    <div>
      <h1>Updating Array in State</h1>
      <input
        onChange={(e) => handleUser(e.target.value)}
        type="text"
        placeholder="Enter Last user name"
      />

      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <hr />
      <input
        onChange={(e) => handleAge(e.target.value)}
        type="text"
        placeholder="Enter Last user age"
      />
      {dataDetails.map((item, index) => (
        <h4 key={index}>
          {item.name}, {item.age}
        </h4>
      ))}
    </div>
  );
}
export default Array;
