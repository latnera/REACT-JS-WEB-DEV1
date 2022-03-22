//here map loop over numbersArray element and apply to callback

//bad way
let numbers = [2, 4, 6, 8, 10];
let result = numbers.map((number) => {
   return number * number;
});
console.log(result);

// bad way
[2, 4, 6, 8, 10].map(function (number) {
   console.log(number * number);
});

// good way. because we use here arrow function.its short
[2, 4, 6, 8, 10].map((number) => console.log(number * number));

//Output: [ 4, 16, 36, 64, 100 ]
