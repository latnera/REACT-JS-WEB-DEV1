import React from "react";

class Create extends React.Component {
   render() {
      return (
         <div>
            <h3>Add new Student</h3>
            Fname:
            <input
               type='text'
               placeholder='New Student FirstName'
               onChange={this.props.newFirstName}
            />
            Lname:
            <input
               type='text'
               placeholder='New StudentLastName'
               onChange={this.props.newLastName}
            />
            Age: <input type='text' placeholder='New Student Age' onChange={this.props.newAge} />
            <button onClick={this.props.saveNewStudent}> Save</button>
         </div>
      );
   }
}

export default Create;
