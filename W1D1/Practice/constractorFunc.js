// constructor function. name of constructor function start by Capital letter
function Person() {
   (this.name = "Shibiru"), (this.age = 13);

   this.print = function () {
      console.log(
         `${this.name}  akkam jirta, umurinkee ${this.age} dha mini? fi Genderinkee immo ${this.gender} dha. kana anu beeka`
      );
   };
}

// create an object
let person1 = new Person();
let person2 = new Person();

// adding new property to constructor function.
Person.prototype.gender = "Male";

person1.print();
console.log(person1.gender); // Male
console.log(person2.gender); // Male
