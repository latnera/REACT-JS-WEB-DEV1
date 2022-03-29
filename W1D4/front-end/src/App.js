import React from "react";
import Students from "./students";
import Create from "./create";

class App extends React.Component {
   state = {
      students: [
         { id: 0, fname: "Shibiru", lname: "Ararso", age: 13 },
         { id: 1, fname: "Wako", lname: "Gemeda", age: 15 },
         { id: 2, fname: "Dejene", lname: "Ayana", age: 17 },
         { id: 3, fname: "Diriba", lname: "Kisi", age: 11 },
         { id: 4, fname: "Ebisa", lname: "Dida", age: 19 },
      ],
      isVisible: true,
      newStudent: { fname: " a", lname: "b ", age: 0 },
   };

   addNewFirstName = (fnameEvent) => {
      this.setState({
         newStudent: {
            fname: fnameEvent.target.value,
            lname: this.state.newStudent.lname,
            age: this.state.newStudent.age,
         },
      });
   };
   addNewLastName = (lnameEvent) => {
      this.setState({
         newStudent: {
            fname: this.state.newStudent.fname,
            lname: lnameEvent.target.value,
            age: this.state.newStudent.age,
         },
      });
   };
   addNewAge = (ageEvent) => {
      this.setState({
         newStudent: {
            fname: this.state.newStudent.fname,
            lname: this.state.newStudent.lname,
            age: ageEvent.target.value,
         },
      });
   };

   saveNewStudent = () => {
      this.setState({ students: this.state.students.concat(this.state.newStudent) });
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

   changeFirstName = (id, event) => {
      let result = this.state.students.map((obj) => {
         if (obj.id === id) {
            let copyObj = { ...obj };
            copyObj.fname = event.target.value;
            return copyObj;
         }
         return obj;
      });
      this.setState({ students: result });
   };
   changeLastName = (id, event) => {
      let result = this.state.students.map((obj) => {
         if (obj.id === id) {
            let copyObj = { ...obj };
            copyObj.lname = event.target.value;
            return copyObj;
         }
         return obj;
      });
      this.setState({ students: result });
   };

   deleteStudent(id) {
      this.setState({
         students: this.state.students.filter((student) => {
            if (student.id === id) {
               return null;
            }
            return student;
         }),
      });
   }

   toggleHandler = () => {
      this.setState({ isVisible: !this.state.isVisible });
   };

   render() {
      let studnts = null;
      if (this.state.isVisible) {
         studnts = this.state.students.map((eachStudent) => {
            return (
               <Students
                  key={eachStudent.id}
                  fname={eachStudent.fname}
                  lname={eachStudent.lname}
                  age={eachStudent.age}
                  makeYounger={() => this.makeYounger(eachStudent.id)}
                  makeOlder={() => this.makeOlder(eachStudent.id)}
                  changeFirstName={(event) => this.changeFirstName(eachStudent.id, event)}
                  changeLastName={(event) => this.changeLastName(eachStudent.id, event)}
                  deleteStudent={() => this.deleteStudent(eachStudent.id)}></Students>
            );
         });
      }
      return (
         <div>
            <button onClick={this.toggleHandler}> Show/Hide</button>
            {studnts}

            <Create
               newFirstName={(event) => this.addNewFirstName(event)}
               newLastName={(event) => this.addNewLastName(event)}
               newAge={(event) => this.addNewAge(event)}
               saveNewStudent={() => this.saveNewStudent()}></Create>
         </div>
      );
   }
}

export default App;
