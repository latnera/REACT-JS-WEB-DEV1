import React from "react";
import Students from "./students";

class App extends React.Component {
   state = {
      students: [
         { id: 0, fname: "Shibiru", lname: "Ararso", age: 13 },
         { id: 1, fname: "Wako", lname: "Gemeda", age: 15 },
         { id: 2, fname: "Dejene", lname: "Ayana", age: 17 },
      ],
   };

   makeOlder = (id) => {
      let result = this.state.students.map((obj) => {
         if (obj.id === id) {
            let copyObj = { ...obj };
            copyObj.age = copyObj.age + 1;
            return copyObj;
         }
         return obj;
      });
      this.setState({ students: result });
   };

   makeYounger = (id) => {
      let result = this.state.students.map((obj) => {
         if (obj.id === id) {
            let copyObj = { ...obj };
            copyObj.age = copyObj.age - 1;
            return copyObj;
         }
         return obj;
      });
      this.setState({ students: result });
   };

   render() {
      return (
         <div>
            <Students
               fname={this.state.students[0].fname}
               lname={this.state.students[0].lname}
               age={this.state.students[0].age}
               makeYounger={() => this.makeYounger(this.state.students[0].id)}
               makeOlder={() => this.makeOlder(this.state.students[0].id)}></Students>
            <Students
               fname={this.state.students[1].fname}
               lname={this.state.students[1].lname}
               age={this.state.students[1].age}
               makeYounger={() => this.makeYounger(this.state.students[1].id)}
               makeOlder={() => this.makeOlder(this.state.students[1].id)}></Students>
            <Students
               fname={this.state.students[2].fname}
               lname={this.state.students[2].lname}
               age={this.state.students[2].age}
               makeYounger={() => this.makeYounger(this.state.students[2].id)}
               makeOlder={() => this.makeOlder(this.state.students[2].id)}></Students>
         </div>
      );
   }
}

export default App;
