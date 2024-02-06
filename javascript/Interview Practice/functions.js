console.log("Radhe Radhe");
// function addAll(...num) {
//   let ans = num.reduce((elem1, elem2) => {
//     return elem1 + elem2;
//   });
//   console.log(ans);
// }
// addAll(1, 2, 3, 4, 5);

// When we use spread operator in parameter it is called rest parameters

// Parameter Destructuring
// let user = {
//   Name: "Lakshay",
//   Age: 22,
// };
// function print({ Name, Age }) {
//   console.log(Name, Age);
// }
// print(user);

// // CallBack Function
// function callback_func(name) {
//   console.log(`Inside callback function.\nYour name is : ${name}`);
// }
// function func_1(callback) {
//   callback("lakshay");
// }
// func_1(callback_func);
// // when we use function as an arrgument in another function it is known as callback function.

// Optional Chaining
// let user = {
//   Name: "Lakshay",
//   Age: 22,
// };
// console.log(user.Name);
// console.log(user.Age);

// Creating our own methods

// function personInfo() {
//   console.log(`Person name is: ${this.Name} and his age is: ${this.Age}`);
// }
// let person1 = {
//   Name: "Lakshay",
//   Age: 21,
//   about: personInfo,
// };
// let person2 = {
//   Name: "Vishal",
//   Age: 23,
//   about: personInfo,
// };
// let person3 = {
//   Name: "Rajat",
//   Age: 22,
//   about: personInfo,
// };
// person1.about();
// person2.about();
// person3.about();

// Call Method in function

// function about() {
//   console.log(`Username is: ${this.Name} and his age is: ${this.age}`);
// }
// let user1 = {
//   Name: "lakshay",
//   age: 22,
// };
// let user2 = {
//   Name: "vishal",
//   age: 22,
// };
// about.call(user1);

// a small function to create an object with some method also

// function createObj(Name, Address, usersID, Age, Gender) {
//   const users = {};
//   users.Name = Name;
//   users.usersID = usersID;
//   users.Address = Address;
//   users.Age = Age;
//   users.Gender = Gender;
//   users.about = function () {
//     return `The Name of this user is ${this.Name} and gender is ${this.Gender}`;
//   };
//   users.is18 = function () {
//     return this.Age >= 18;
//   };
//   return users;
// }
// let user1 = createObj("Lakshay", "Faridabad", 1, 15, "Male");
// let user2 = createObj("Vishal", "Faridabad", 2, 20, "Male");
// let user3 = createObj("Ishita", "Faridabad", 3, 22, "Female");

// user3.about();
// console.log(user1.is18());

// This is the same Question but the above question have a issue that is, when we are an object createObj() is invoked but the problem is that everytime the object is create the method inside the objects are created so when we have millions of users we will not be able to handle there data. So the solution here is that move those function outside of the function and give the refernce of those methods in the function. By this way you are invoking about() and is18() not creating thm everytime.

// const user_func = {
//   about : function(){
//     return `The Name of this user is ${this.Name} and gender is ${this.Gender}`;
//   },
//   is18 : function(){
//     return this.Age>=18;
//   }
// }
// function createObj(Name, Address, usersID, Age, Gender){
//   const users = {};
//   users.Name = Name;
//   users.usersID = usersID;
//   users.Address = Address;
//   users.Age = Age;
//   users.Gender = Gender;
//   users.about = user_func.about;
//   users.is18 = user_func.is18;
//   return users;
// }
// let user1 = createObj("Lakshay", "Faridabad", 1, 15, "Male");
// let user2 = createObj("Vishal", "Faridabad", 2, 20, "Male");
// let user3 = createObj("Ishita", "Faridabad", 3, 22, "Female");

// user3.about();
// console.log(user1.is18());

// This above function also have one more improvement that is, when we are making more function in user_func object we have to pass on the reference in the createObj() function. And to remove this we have to first understand Object.create() method.

// Object.create()

// let obj1 = {
//   key1: "obj1 value1",
//   key2: "obj1 value2",
// };
// let obj2 = Object.create(obj1);
// obj2.key1 = "obj2 value1";
// obj2.key3 = "value3";
// console.log(obj2.key1);
// console.log(obj2.key1);
// console.log(obj2.key1);

// console.log(obj2);

// Object.create() this method is used to set a __proto__ OR [[Prototype]] (Imp. Note:- This [[Prototype]] is totally different from prototype that a function have). A [[Prototype]] keep the reference of the other obj and if the key that we are searching for, is not found in the current object then js will try to search for it in the [[Prototype]] and if it's not available there also then it will show us undefined in the output.

// const user_func = {
//   about: function () {
//     return `The Name of this user is ${this.Name} and gender is ${this.Gender}`;
//   },
//   is18: function () {
//     return this.Age >= 18;
//   },
// };
// function createObj(Name, Address, usersID, Age, Gender) {
//   const users = Object.create(user_func);
//   users.Name = Name;
//   users.usersID = usersID;
//   users.Address = Address;
//   users.Age = Age;
//   users.Gender = Gender;
//   // users.about = user_func.about;
//   // users.is18 = user_func.is18;   // After commenting this we are still able to call these functions because js invoking these function from [[Prototype]] which in this is user_func.
//   return users;
// }
// let user1 = createObj("Lakshay", "Faridabad",1, 15, "Male");
// let user2 = createObj("Vishal", "Faridabad",2, 20, "Male");
// let user3 = createObj("Ishita", "Faridabad",3, 22, "Female");

// console.log(user3.about());
// console.log(user1.is18());

// Prototype in functions
// Prototype in function is just like an empty object we can store anything about the function here. Prototype is only present in the function. In prototype the properties of a particular function is present like constructor() and some user defined function.

// trying to do above same question using prototype

// function createObj(Name, Address, usersID, Age, Gender) {
//   const users = Object.create(createObj.prototype);
//   users.Name = Name;
//   users.usersID = usersID;
//   users.Address = Address;
//   users.Age = Age;
//   users.Gender = Gender;
//   // users.about = user_func.about;
//   // users.is18 = user_func.is18;   // After commenting this we are still able to call these functions because js invoking these function from function's Prototype.
//   return users;
// }
// createObj.prototype.about = function () {
//   return `The Name of this user is ${this.Name} and gender is ${this.Gender}`;
// };
// createObj.prototype.is18 = function () {
//   return this.Age >= 18;
// };
// console.log(createObj.prototype);
// let user1 = createObj("Lakshay", "Faridabad", 1, 15, "Male");
// let user2 = createObj("Vishal", "Faridabad", 2, 20, "Male");
// let user3 = createObj("Ishita", "Faridabad", 3, 22, "Female");

// console.log(user3.about());
// console.log(user2.is18());

// The difference between a __proto__ or [[Prototype]] and a Prototype is that prototype is just an empty object that stores the function's own method and function.Prototype is just like meta data for the function. This property is only available in functions.      But [[Prototype]] is a reference, if js is not able to find the invoked method in the function itself then it will search for it in the [[Prototype]].

// Closures
// Topic of closures arises when we try to return function from a function.
// CODE
function outerFunc(a, b) {
  return function () {
    console.log(`${a} ${b}`);
  };
}

let ans = outerFunc(5, 10);
ans();
// let's understand whats going on inside this function
// There is an outerfunction named outerFunc() which is taking a and b as parameters and returning a function which is printing the value of these variables, basically when returning some thing in function that particular thing get stored in the function, so to get the value we print the function,
// For Example
function myFunc() {
  return "Radhe Radhe";
}
myFunc();
console.log(myFunc());
// On line 224 we are simply calling the function but nothing is happening but when we try to print the function we are getting the expected output, So why is this happening ? Because inside the function we are not performing any task we are just returning the string.
// Returning back to the above Code
// On line 217 we are calling the outerFunc() and also passing the parameters, and the result is being transfered to the variable named ans. And now variable ans in holding returing function which is printing the variables named a and b. And when we are calling the ans variable we are indirectly calling the returning function.
// So when the function is returning it is taking the variables of it's lexical scope with it. This is known as closures.

function cube(a) {
  function task() {
    console.log(a * a * a);
  }
  return task;
}

let res = cube(5);
res();
