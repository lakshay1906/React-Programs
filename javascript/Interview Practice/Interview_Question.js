console.log("Radhe Radhe");

// 1
// function fruits()
// {
//     console.log(name1);
//     console.log(price);
//     var name1 = "apple";    // undefined
//     let price = 20;         // error
// }
// fruits();
// We can not use the variables declared using let keyword before declaring the variable
// Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared.

// 2

// for(var i=0;i<3;i++)
// {
//     setTimeout(()=> console.log(i) , 1);
// }       // 3,3,3
// for(let i=0;i<3;i++)
// {
//     setTimeout(()=> console.log(i) , 1);
// }       //  0,1,2
// reason ?????????????????????????????????????????????????????????????

// 3

// console.log(+true);         // 1
// console.log(typeof +true);  // number

// 4

// console.log(!"Radhe Radhe");        // false
// console.log(!!"Radhe Radhe");       // true
// console.log(typeof !"Radhe Radhe"); // boolean
// console.log(typeof !!"Radhe Radhe");// boolean

// 5

// let data ="size";
// const bird = {size:"small"};
// console.log(bird[data]);    // small :- we can pass the variable name in square brackets
// console.log(bird["size"]);  // small :- we can write the object's key in quotes also
// console.log(bird.size);     // small
// console.log(bird.data);     // undefined
// console.log(bird[size]);     // error :- size isn't defined\

// 6

// let c = {name: "peter"};
// let d;
// d=c;
// c.name ="anil";
// console.log(d.name);     // anil reason because now variable d also have the refernce of object c.

// 7

// var x;
// var x =10;
// console.log(x); // 10

// let x;
// let x = 10;     // error :- x is already defined
// console.log(x);

// 8

// let a= 3;
// let b=new Number(3);
// console.log(typeof a);  // number
// console.log(typeof b);  // object
// console.log(a==b);      // true
// console.log(a===b);     // false because the data is same but the data type is different

// 9

// function fruit(){console.log("hello")};
// fruit.name = "apple";              // no error, because we are just adding new property to the function named fruit and it's quite okay....
// fruit();

// 10

// let num = new String("20");
// console.log(++num);         //21
// let num1 = new Number("20");
// console.log(++num1);        //21

// 11

// let arr = [];
// console.log(typeof arr); // object
// Note :-
// The data type of NaN is number
// The data type of an array is object
// The data type of a date is object
// The data type of null is object
// The data type of an undefined variable is undefined

// 12

// function getAge(...args){console.log(typeof agrs);} // ...(triple dots) is a spread operator in js
// getAge(21);

// 12(a)

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May" ,"dec"];

// const year = [...q1, ...q2, ...q3, ...q4];
// const year1 = [q1, q2,q3,q4];
// console.log(year)        // this will combine all the array into one array
// console.log(year1);      // the output of this will an array of array

// 12(b)

// const numbers = [23,55,21,87,56];
// let maxValue = Math.max(...numbers);
// let maxValue1 = Math.max(numbers);
// console.log(maxValue);      // 87
// console.log(maxValue1);     // NaN

// 13

// function getAge()
// {
//     'use strict';
//     age = 21;           // error:- age is not defined, this error occured because of 'use strict' if we comment this it will not show us an error
//     console.log(age);
// }
// getAge();

// 14

// const obj = {1:"a" , hello:"b" , 3:"c"};
// console.log(obj.hasOwnProperty("1"));       //true
// console.log(obj.hasOwnProperty(1));         //true
// console.log(obj.hasOwnProperty("hello"));   //true
// console.log(obj.hasOwnProperty(hello));     //false ; note:- if a numeric key is present in the object the we can use that key the with or without quotations but if the key is not numberic we can not use that key without quotations because then the browser will take that key as a different variable;

// 15

// const obj = {a:"one", b:"two", a:"repeat"};
// console.log(obj);
// // a: repeat , b:two; because we overwrite the first key in the object and the position will also not change in the browser's output;

// 16

// for(let i=1;i<5;i++)
// {
//     if(i===3)continue; // it will not print 3, the loop will be continued from 4 again , simply it's just skipping 3;
//     console.log(i);
// }

// 17

// const a = () => console.log('First');
// const b = () => setTimeout(() => console.log('second'));
// const c = () => console.log('third');

// a();
// b();
// c();    //even if we are not defining the time in the setTimeout function it will still execute in the last

// let temp=0;
// function seconds()
// {
//     while()
//     {
//         setTimeout(()=>console.log(++temp), 1000);
//     }
// }
// seconds(); // ??????????????????????????????????????????why it's not running

// 18

// function hello()
// {
//     return(()=>0)();
// }
// console.log(typeof hello());        // number

// function hello()
// {
//     return(()=>0);
// }
// console.log(typeof hello());        // function

// function hello()
// {
//     return(()=>"hello")();
// }
// console.log(typeof hello());            // string

// 20

// console.log(typeof typeof 1); // if we are writing typeof twice then it will give string as output in every case;

// 21

// const numbers = [1,2,3,4];
// numbers[9] = 10;
// console.log(numbers);

// 22

// In javascript everything is either primitive or object;(primitive datatypes like number,boolean, string, bigint, undefined, symbol, null)

// 23

// console.log(!!null)     // false
// console.log(!!"hello")  // false on if the string is empty otherwise true;
// console.log(!!1)        // true whether the number is positive or negetive;
// console.log(!!undefined)// false

// 24

// console.log(typeof 3+4+'5');        // number45
// console.log(typeof (3+4+'5'));      // string
// console.log(typeof (3+4+ +'5'));    // number

//25

// function getInfo(member){
//     member.name = "anil";
// }
// const person = {name: 'sarah'};
// getInfo(person);
// console.log(person);     // tricky way of saying person.name = 'anil';

// 26

// (()=>{
//     let x = (y=10);
// })();
// console.log(typeof y); // because the scope of the x variable is limted but we haven't defined y so js will automatically define it by var keyword that's why the typeof y will be number;

// 27

// let x = 100;
// (()=> {var x = 20;})();
// console.log(x);         //  100

// 28

// console.log(!true - true); // -1 :- 0-1 = -1;

// // 29
// console.log(true+ +"10");

// 30

// let obj = {message:"good job", status:"complete"};
// console.log(obj);
// let {message, status1} = obj;   // destructuring an object
// console.log(message);
// console.log(status1);

// 31

// function init(){
//     let name = "Lakshay";
//     function display_Name(){
//         console.log(name);
//     }
//     display_Name();
// }
// init();

// Lexical Scope:- lexical scope is the parent scope. For Example-: In this above function of display_Name() when we try to console the variable name, js compiler tries to find the name initialization, when the initialization is not found in the same scope it tries to find the initialization in the parent scope i.e. init() or grandparent scope (if exist)or greatgrandparent scope (if exist) and so on.....till the main scope or the global scope of the program this scope is known as lexical scope.  OR  we can say that the child function have the access of its parent function variables.

// Latest version of javascript is es11.

// 32

// Array.from()
// let str = "Lakshay";
// let arr = Array.from(str); // Array.from is a method that creates a array from a string or a HTML Collection
// console.log(arr);

//33
// for of loop
// let arr = [5,3,8,12,9,1];
// for (const i of arr) {
//     console.log(i);
// }
//for of loop is used to get all the elements one by one from an array.
// here iterator returns the elements.

// 34
// for in loop
// let arr = [5,3,8,12,9,1];
// for (const i in arr) {
//     console.log(`${i} => ${arr[i]}`);
// }
// for in loop is used to get the index number starting from 0 to arr.length if we can to get the element we have to use arr[i]; here iterator returns the index number

// 35
// map method and for each loop in array

// let arr = [23,51,68,19,47,33];
// let for_each= arr.forEach(element => {
//     console.log(element+1);;
// });
// console.log(for_each);// undefined

// let arr = [23,51,68,19,47,33];
// let map_arr = arr.map((value, index, arr)=>{
//     console.log(value, index , arr);
//     return value+1;
// })
// console.log(map_arr);

// Both for each and map method is used to manupulate the array but the only difference is the map creates a different array, and forEach loop just manuplate the existing array.

// 36
// Filter method in array
// let arr = [45, 23, 1, 56, 19, 3, 8];
// let filtered_arr = arr.filter((value) => {
//   return value > 10;    // returning the value which is greater than 10 from the array.
// });
// console.log(filtered_arr);
// this method is used to filter the array.

// 37
// Reduce Method in array
// let arr = [0, 1, 2, 3, 4, 5];
// let new_arr = arr.reduce((h1, h2) => {
//   return h1 + h2;
// });
// console.log(new_arr);

// 38
// Primitive & Reference DataTypes

// Primitives
// 1 Number
// 2 BigInt
// 3 String
// 4 Symbol
// 5 Boolean
// 6 null
// 7 undefined

//      CODE
// let str = "Lakshay";
// let str2 = str;
// console.log(str, str2);
// str = "Vishal";
// console.log(str, str2);

// In primitive data type, if we copy the value of a variable into another variable the actual value is fully copied and later on if we change the value the first variable the value of second variable wouldn't change. Because intially the value was same but is in the different variable and now both the variables hold different values. In memory same value is given to the second variable
// this above rule is applied on all the primitive data types....

// Reference Types
// 1 Objects
// 2 Arrays
// 3 Function
// 4 classes
// 5 set
// 6 RegExp

//      CODE
// let arr = ["item1", "item2", "item3", "item4"];
// let arr_2 = arr;
// console.log(arr, arr_2);
// arr[1] = "changed value";
// console.log(arr, arr_2);

// In reference datatype if we pass the value of one variable into another variable the value in not fully copied only the reference to that particular variable is copied into another variable and because of that if we change or modify the value of first variable the value of second variable will change because technically the value is not copied only the address of that value is pass on to another variable, so in the memory the value is one but now another variable called arr_2 can access it.

// 39
// Spread Operator
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(...arr);
// let str = "lakshay";
// console.log(...str);
// this three dots is known as spread operator in js. It is used to spread the elements of an array or a string.

// 40
// Destructuring an array
//      CODE
// let arr = ["item1", "item2", "item3"];
// let [myarr1, , myarr2] = arr; // we can also assume this line as myarr1 = arr[0]; myarr2 = arr[1];
// console.log(myarr1, myarr2);
// destructuring means passing the value of an object or an array into a particular variable.

// 41
// Destructuring an Object
//      CODE
// let obj = {
//   Name: "lakshay",
//   Age: 22,
// };
// let objName = obj.Name;
// let objAge = obj.Age;
// console.log(objName);
// console.log(objAge);
//      OR
// let { Name, Age } = obj;    // In this ,method the variable should be same as keyName of the object.
// console.log(Name);
// console.log(Age);

// 42
// Concept of Hoisting

// console.log(myname);
// console.log(myname_1);
// var myname = "lakshay";
// let myname_1 = "lakshay";

// The concept of hoisting says that we can not use a variable before declaring it. If we are making a variable using let keyword then we cann't use a variable before decalration and initialization and we will be having an reference error in our console, but on the other hand if we are doing the same thing using var keyword then we will get undefined as our output. and if we doing the same thing with the function then we will getting the expected output
// print();
// function print() {
//   console.log("I'm inside the function");
// }

// 43
// Find Method

// let users = [
//   { usersID: 1, userName: "lakshay" },
//   { usersID: 2, userName: "lakshay" },
//   { usersID: 3, userName: "lakshay" },
//   { usersID: 4, userName: "lakshay" },
//   { usersID: 5, userName: "lakshay" },
// ];
// let res = users.find((user) => {
//   return user.usersID === 3;
// });
// console.log(res);

// 44
// Every Method
// let num = [2, 4, 6, 8, 10];
// let res = num.every((num) => num % 2 === 0); // Working is Same as &&(AND)operator.
// let res_1 = num.every((num) => {
//   num % 2 === 0;
// });
// console.log(res);
// console.log(res_1);     //Why res_1 returning false.

// 45
// Some Method
// let num = [3, 5, 7, 8, 11];
// let res = num.some((num) => num % 2 === 0);  // Working is Same as ||(OR)Operator.
// console.log(res);

// 46
// Fill Method
// let arr = new Array(10).fill(-1);
// console.log(arr);

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.fill(0, 2, 5);   // arr.fill(what to fill, start, end)
// console.log(arr);
// it will change the original array

// 47
// Splice Method
// This method is used to delete and insert also

// // To delete from array
// let arr = ["item1", "item2", "item3"];
// console.log(arr);
// arr.splice(1, 1); // splice(start, Delete, Insert) and hence item2 is deleted
// console.log(arr);

// // To insert
// let arr_1 = ["item1", "item2", "item3"];
// console.log(arr_1);
// arr_1.splice(1, 0, "inserted item");
// console.log(arr_1);

// // TO delete and insert
// let arr_2 = ["item1", "item2", "item3"];
// console.log(arr_2);
// arr_2.splice(1, 1, "replaced item");
// console.log(arr_2);

// 48
// function addAll(...num) {
//   let res = 0;
//   let ans = num.reduce((elem1, elem2) => {
//     return elem1 + elem2;
//   });
//   console.log(ans);
// }
// addAll(1, 2, 3, 4, 5);
// Rest Parameter

// 49
// cloning object
// let obj = {
//   Name: "lakshay",
//   Age: 22,
// };
// let obj2 = obj; // In this step the reference of obj is copied to obj2 and because of that if we change something in obj, obj2 will change automatically because only reference is given to obj2
// console.log(obj);
// console.log(obj2);
// obj.Gender = "Male";
// // so to clone object like primitive datatypes we can use spread operator

// let obj3 = { ...obj };
// obj.height = `5'4`;
// console.log(obj3);
// // Now if we change the obj object the obj3 object will remain unchanged because the actual value of obj is copied to obj3 not the reference this time. So if we want to clone an object and want to make it an independent object we can use spread operator.

// 50
// Optional Chaining
// let user = {
//   Name: "Lakshay",
//   Age: 22,
//   //   Address: { houseno: "Sector-75 Faridabad" },
// };
// console.log(user.Name);
// console.log(user.Age);
// console.log(user.Address?.houseno); // In this case user.Address is undefined and if we try to get the property of undefined js will give us an TypeError that why we will use ?. operator to avoid the error. This operator first check if the required information in the object is available or not if its not available it will give us undefined but if the whole object is not available it will give us an ReferenceError.This (?.) is called optional chaining. We will use this when we are creating nexted objects like in the case of address.

// 51
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

// 52
// Call Method in function

// function about() {
//   console.log(`Username is: ${this.Name} and his age is: ${this.age}`);
// }
// let user1 = {
//   Name: "lakshay",
//   age: 21,
// };
// let user2 = {
//   Name: "vishal",
//   age: 22,
// };
// about.call(user1);
// about.call(user2);

// 53
// Apply Method in function

// function about(hobby, fav_artist) {
//   console.log(
//     `Username is: ${this.Name} and his age is: ${this.age} ${hobby} ${fav_artist}`
//   );
// }
// let user1 = {
//   Name: "lakshay",
//   age: 22,
// };
// let user2 = {
//   Name: "vishal",
//   age: 22,
// };
// about.apply(user1, ["trading", "pranjal"]);
// the only difference in call and apply method is that in apply method we can pass the values in an array.

// 54
// Bind Method
// function about(hobby, fav_artist) {
//   console.log(
//     `Username is: ${this.Name} and his age is: ${this.age} ${hobby} ${fav_artist}`
//   );
// }
// let user1 = {
//   Name: "lakshay",
//   age: 22,
// };
// let user2 = {
//   Name: "vishal",
//   age: 22,
// };
// let func = about.bind(user1, "trading", "pranjal");
// func();
// bind method is returning  a function  which we can call anytime and umpteen number of times.

// Prototype in functions
// Prototype in function is just like an empty object
// it is more deeply explained in function file.
