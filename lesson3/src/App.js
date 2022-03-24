import React from "react";
import FirstName from "./firstName";
import LastName from "./lastName";
import Incremnt from "./Increment";
import Students from "./students";

class App extends React.Component {
   state = { counter: 1 };

   incrementCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
   };
   render() {
      return (
         <div>
            <Incremnt
               counter={this.state.counter}
               incrementHandler={this.incrementCounter}></Incremnt>
            <FirstName fName='Hachalu'> </FirstName>
            <LastName lName='Hundessa'>Here I'm from the child list</LastName>
            <Students></Students>
         </div>
      );
   }
}

//! class component
// class App extends React.Component {
//    state = {
//       counter: 0,
//       counter2: 0,
//    };

//    incrementCounter = () => {
//       this.setState({
//          counter: this.state.counter + 1,
//          counter2: this.state.counter2 + 5,
//       });
//    };
//    render() {
//       return (
//          <div>
//             <FirstName
//                counter={this.state.counter}
//                counter2={this.state.counter2}
//                incrementHandler={this.incrementCounter}></FirstName>
//          </div>
//       );
//    }
// }

export default App;
