import React from "react";

class Students extends React.Component {
   render() {
      return (
         <div>
            <h1>
               {this.props.fname} {this.props.lname} {this.props.age}
            </h1>
            <input
               type='text'
               placeholder='FirstName  Update'
               onChange={this.props.changeFirstName}
            />
            <input
               type='text'
               placeholder=' LastName Update'
               onChange={this.props.changeLastName}
            />
            <button onClick={this.props.makeYounger}>Make Young Age</button>

            <button onClick={this.props.makeOlder}> Make Older Age</button>
            <button onClick={this.props.deleteStudent}> Delete</button>
         </div>
      );
   }
}

export default Students;
