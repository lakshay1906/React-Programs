console.log("Radhe Radhe");
// Class Keyword

// class createObj {
//   constructor(Name, age, gender) {
//     this.Name = Name;
//     this.age = age;
//     this.gender = gender;
//   }
//   about() {
//     return `Username is ${this.Name} and user's age is ${this.age}`;
//   }
//   is18() {
//     return this.age >= 18;
//   }
// }
// // if we are not writing 'new' keyword then we will not be able call the constructor function of the class and we will be seeing an error related to that.
// let user1 = new createObj("Lakshay", 15, "Male");
// let user2 = new createObj("vishal", 18, "Male");
// console.log(user2.about());

// Inheritance
// class animal {
//   constructor(Name, age, category) {
//     this.Name = Name;
//     this.age = age;
//     this.category = category;
//   }
//   says() {
//     if (this.category == "Cat") {
//       return `${this.category} says Meow Meow`;
//     } else if (this.category == "Dog") {
//       return `${this.category} says Bhau Bhau`;
//     } else {
//       return `${this.category} is not yet listed`;
//     }
//   }
//   about() {
//     return `Animal is ${this.category} and name is ${this.Name} and age is ${this.age}`;
//   }
// }

// let dog1 = new animal("Tommy", 5, "Dog");

// console.log(dog1);
// console.log(dog1.says());

// let cat1 = new animal("Tom", 4, "Cat");

// console.log(cat1);
// console.log(cat1.says());

// class wildAnimal extends animal {
//   constructor(Name, age, category, speed) {
//     super(Name, age, category);
//     this.speed = speed;
//   }
//   says() {
//     if (this.category == "Lion") {
//       return `${this.category} says Roar Roar`;
//     } else {
//       return `${this.category} isn't listed yet`;
//     }
//   }
//   get run() {
//     return `${this.category} runs at a speed of ${this.speed}`;
//   }
//   setSpeed(speed) {
//     this.speed = speed;
//     return `${this.category} is very hardworking and now his speed is ${this.speed}`;
//   }
//   set setAge(age) {
//     this.age = age;
//   } // Min and max no. of parameter in setter method is 1.
// }

// let lion1 = new wildAnimal("Sheru", 12, "Lion", 45);

// console.log(lion1);
// console.log(lion1.says()); // JS first finds the invoked method or property in the child class but if the method or the property isn't found there then it will go to the super class to invoke the method or property and if in any case JS not able to find the invoked method there then it will give us an error.
// console.log(lion1.run); // Now we have made the run function a getter, and because of that it will work as a property, So we cann't call the run function with moon brackets, if we try to invoke the function with moon brackets then it will throw an error that its not a function(Note: While calling a property we not use the moon brackets eg.(lion1.speed) this a property not a function. And when we are calling a function we have to use the moon brackets eg.(lion1.run()) and now run function is also a property)
// console.log(lion1.setSpeed(60));
// lion1.setAge = 15;
// console.log(`Its being 3 years now lion1's age is ${lion1.age}`);

// // STATIC Keyword
// // there are some properties that directly belongs to class not to objects.
// // We can create those properties and method using static keyword
// class user {
//   constructor(Name, age) {
//     this.Name = Name;
//     this.age = age;
//   }
//   static info = "This user class is imp. class";
//   static information(info) {
//     return `${info} information is important`;
//   }
// }
// let user1 = new user("Lakshay", 21);
// console.log(user1);
// console.log(user.info);
// console.log(user1.info); // Output is undefined beacuse it's a class property no such property is defined for the user that's why it's showing undefined.
// console.log(user.information("XYZ"));
