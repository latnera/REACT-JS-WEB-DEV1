import React from "react";

class Increment extends React.Component {
   render() {
      return (
         <div>
            <h1> {this.props.counter}</h1>
            <button onClick={this.props.incrementHandler}> Increment Click</button>
         </div>
      );
   }
}

export default Increment;
