class Human {
   constructor(eye, leg) {
      this.eye = eye;
      this.leg = leg;
   }
   print = function () {
      console.log(this.eye + " " + this.leg);
   };
}

class Person extends Human {
   constructor(eye, leg, brain) {
      super(eye, leg);
      this.brain = brain;
   }
   //Overwrite method. prioritize for child class when 2 method declare in both ch and prnt
   print = function () {
      console.log(this.eye + " " + this.leg + " " + this.brain);
   };
}

let person1 = new Person("ija", "luka", "sammu");

person1.print();
