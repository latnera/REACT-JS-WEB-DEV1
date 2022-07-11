import React from "react";

function Details(props) {
  return (
    <div>
      {props.name}
      <br />
      {props.rating}
      <br />
      {props.type}
      <br />
      {props.dName}
      <br />
      {props.rYear}
      <br />
      {props.discription}
      <br />
    </div>
  );
}

export default Details;
