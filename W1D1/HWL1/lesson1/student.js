import Person from "./person.js"; // in prsn constractor we have method w/c returns {My age is " + this.age}

class Student extends Person {
   constructor(name) {
      super(17);
      this.name = name;
   }
   sayHi = () => `Hi. I am ${this.name} and ${this.age} years old`;
}

export default Student;
