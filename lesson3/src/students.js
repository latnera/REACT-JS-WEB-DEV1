import React from "react";

class Students extends React.Component {
   state = {
      students: [
         {
            name: "Shibiru",
            age: 18,
         },
         {
            name: "Dejene",
            age: 28,
         },
      ],
   };

   makeOlder = () => {
      console.log("Hello");
      this.setState({ age: this.state.students[0].age + 1 });
   };
   makeYounger = () => {
      this.setState({ age: this.state.students[1].age - 1 });
   };

   render() {
      console.log("Hello");
      return (
         <div>
            <h1>
               {this.state.students[0].name} {this.state.students[0].age}
            </h1>
            <button onclick={this.makeYounger}>Make Younger</button>

            <h1>
               {this.state.students[1].name} {this.state.students[1].age}
            </h1>
            <button onClick={this.makeYounger}>Make Younger</button>
         </div>
      );
   }
}

export default Students;
