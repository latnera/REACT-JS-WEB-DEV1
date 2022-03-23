import React from "react";

function LastName(props) {
   return (
      <div>
         <h1> {props.lName}</h1>

         <h1>{props.children}</h1>
      </div>
   );
}

export default LastName;
