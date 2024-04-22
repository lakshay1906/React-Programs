// const data = [1, 4, 5, 2, 4, 621, 4];

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// sort(data);

// Increasing a particular key in an object
// let obj = [
//   { name: "lakshay", skill: "react.js" },
//   { name: "vishal", skill: "java" },
// ];

// function onBtnClick() {
//   let obj2 = {
//     name: "akshay",
//     skill: "Nothing",
//   };
//   obj2.qty = 1;
//   obj.push(obj2);
//   console.log(obj);
// }
// function onIncrease() {
//   obj[2].qty += 1;
//   console.log(obj);
// }

// let a = 10;
// function calc(d) {
//   return (a += d);
// }
// console.log(calc(-5));

// destructuring

let a = 10;
let arr = [a, 1, 2, 3, 4, 5];
let obj = {
  name: "Lakshay",
  skill: "React",
};

let [c, d] = arr;
console.log(c, d);
let { name } = obj;
console.log(obj["skill"]);

// if we want to destructure an array then we can set any name as another varibale, but when we destructure an object then we are not creating another variable we have to use the key to take a particular value out of it.
