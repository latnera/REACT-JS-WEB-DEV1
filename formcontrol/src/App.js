import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState([]);

  const [names, setNames] = useState({ fName: "", lName: "" });

  const handleChange = (event) => {
    let copyNames = { ...names };
    copyNames[event.target.name] = event.target.value;
    setNames(copyNames);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let copyState = [...state];
    copyState.push(names);
    setState(copyState);
  };

  return (
    <>
      {state.map((data) => (
        <h1>
          {data.fName} {data.lName}
        </h1>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          fName:
          <input type="text" name="fName" onChange={(e) => handleChange(e)} />
        </label>
        <label>
          lName:
          <input type="text" name="lName" onChange={(e) => handleChange(e)} />
        </label>
        <button type="sumit">Summited</button>
      </form>
    </>
  );
}
