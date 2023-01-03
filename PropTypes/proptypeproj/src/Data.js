import React from "react";
import { PropTypes } from "prop-types";

function Data(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  );
}
//1st install. npm i prop-types --save
//2nd import. import { PropTypes } from "prop-types";
//3rd do this.  Count.propTypes = {
//                  key is the name of the prop and
//                  value is the PropType
//              }

Data.propTypes = {
  name: PropTypes.number, // eg this show error. bc coming name prop is string but this type expect string
  age: PropTypes.number // this is perfect.
};
export default Data;
