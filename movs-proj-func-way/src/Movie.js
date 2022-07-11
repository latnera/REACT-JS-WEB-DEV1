import React from "react";

function Movie(props) {
  return (
    <div>
      {props.name}
      <br />
      {props.rating}
      <br />
      {props.type}
      <br />
      <button onClick={props.addtoFavrMtd}>Add to Favorite list</button>
      <button onClick={props.updateMtd}>Update</button>
      <button onClick={props.detailsMtd}>Details</button>

      <button onClick={props.deleteMtd}>Delete</button>
      <br />
      <>========================================</>
    </div>
  );
}

export default Movie;
