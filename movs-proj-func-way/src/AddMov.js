import React from "react";

function AddMov(props) {
  return (
    <div>
      <input type="text" placeholder="name" onChange={props.addNameMtd}></input>
      <input type="text" placeholder="rating" onChange={props.addRatingMtd}></input>
      <input type="text" placeholder="type" onChange={props.addTypeMtd}></input>

      <button type="button" onClick={props.saveData}>
        Add to List
      </button>
    </div>
  );
}

export default AddMov;
