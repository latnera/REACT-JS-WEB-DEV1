import React from "react";

// const Child = (props) => {
//    return (
//       <div>
//          <h1> {props.children}</h1>
//          <h2>
//             Hello {props.fName} {props.lName}!
//          </h2>
//       </div>
//    );
// };

class Child extends React.Component {
   render() {
      return (
         <div>
            <h1> {this.props.children}</h1>
            <h2>
               Hello {this.props.fName} {this.props.lName}!
            </h2>
         </div>
      );
   }
}

export default Child;
