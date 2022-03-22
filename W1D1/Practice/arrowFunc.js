//!  ECMAScript5 versus ES6 on function

//ES5 syntax expression of Normal function
let birthday = function () {
   return `Happy Birth Day Normal`;
};

console.log(birthday());

//ES6 syntax expression of Arrow function
let hbd = (age, name) => `Happy ${age}th Birth Day ${name}! from Arrow`;

console.log(hbd(27, "Shibiru"));

//reduce array build in method using arrow function
//reduce take 2 parameters. 1 is total of prev process{accumulator} and 2nd is current elemt{currentValue}.
let sum = [1, 2, 3, 4, 5, 6].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 21
