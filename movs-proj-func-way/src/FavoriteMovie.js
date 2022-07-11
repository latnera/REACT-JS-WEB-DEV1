import React from "react";

function Fovorite(props) {
  return (
    <div>
      {props.name}
      <br />

      {props.rating}
      <br />

      {props.type}
      <br />
      <button onClick={props.removeFavorMtd}>Remove from Favorite</button>
    </div>
  );
}

export default Fovorite;
