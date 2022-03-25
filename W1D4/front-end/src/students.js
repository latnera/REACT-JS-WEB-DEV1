import React from "react";

class Students extends React.Component {
   render() {
      return (
         <div>
            <h1>
               {this.props.fname} {this.props.lname} {this.props.age}
            </h1>
            <button onClick={this.props.makeYounger}>Make Young Age</button>

            <button onClick={this.props.makeOlder}> Make Older Age</button>
         </div>
      );
   }
}

export default Students;
