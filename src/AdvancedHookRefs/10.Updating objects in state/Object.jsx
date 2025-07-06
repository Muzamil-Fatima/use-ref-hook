import { useState } from "react";
function Object() {
  // const [name, setName]=useState("Fatima")

  const [data, setData] = useState({
    name: "Muzamil Fatima",
    address: {
      city: "Wazaribad",
      country: "Pakistan",
    },
  });
  const handleName = (value) => {
    data.name = value;
    console.log(value);
    setData({ ...data });
  };
  const handleCity = (city) => {
    data.address.city = city;
    console.log(data);
    setData({ ...data, address: { ...data.address, city } });
  };
  return (
    <div className="m-8">
      <h1 className="text-2xl font-bold bg-amber-300 m-6 p-4">
        Updating Object in State{" "}
      </h1>
      {/* <button onClick={handleName}>Update Name</button> */}
      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />
      <input
        type="text"
        placeholder="update city"
        onChange={(event) => handleCity(event.target.value)}
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Name: {data.address.country}</h2>
    </div>
  );
}
export default Object;
