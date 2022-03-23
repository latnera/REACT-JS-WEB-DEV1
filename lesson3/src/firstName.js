import React from "react";

class FirstName extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.fName}</h1>
         </div>
      );
   }
}

export default FirstName;
