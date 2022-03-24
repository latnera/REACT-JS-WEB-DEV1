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
      let result = this.state.students.map((obj) => {
         return {
            name: obj.name,
            age: obj.age + 1,
         };
      });
      this.setState({ students: result });
   };

   makeYounger = () => {
      let result = this.state.students.map((obj) => {
         return {
            name: obj.name,
            age: obj.age - 1,
         };
      });
      this.setState({ students: result });
   };

   render() {
      return (
         <div>
            <h1>
               {this.state.students[0].name} {this.state.students[0].age}
            </h1>

            <h1>
               {this.state.students[1].name} {this.state.students[1].age}
            </h1>
            <button onClick={this.makeYounger}>Make Younger the Age</button>
            <button onClick={this.makeOlder}>Make Older the Age</button>
         </div>
      );
   }
}

export default Students;
