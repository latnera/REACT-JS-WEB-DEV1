import React from "react";

function UpdatePage(props) {
  return (
    <div>
      <input type="text" value={props.name} onChange={props.updateNameMtd} />
      <br />
      <input type="text" value={props.rating} onChange={props.updateRateMtd} />
      <br />
      <input type="text" value={props.type} onChange={props.updateTypeMtd} />
      <button onClick={props.applyMtd}>Apply to movies</button>
    </div>
  );
}

export default UpdatePage;
