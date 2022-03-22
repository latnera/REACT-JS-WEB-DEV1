import Student from "./student.js";
import { minutesInHour } from "./helper.js";
import { sayHi } from "./helper.js";
const student1 = new Student("Bob");
console.log(student1.sayHi()); // student method
console.log(student1.sayYourAge()); //person method
console.log(`this is coming from helper.js=> ${sayHi()}`);
console.log(`This is minutes in hour=> ${minutesInHour}`);
