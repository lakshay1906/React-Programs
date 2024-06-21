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

// let a = 10;
// let arr = [a, 1, 2, 3, 4, 5];
// let obj = {
//   name: "Lakshay",
//   skill: "React",
// };

// let [c, d] = arr;
// console.log(c, d);
// let { name } = obj;
// console.log(obj["skill"]);

// if we want to destructure an array then we can set any name as another varibale, but when we destructure an object then we are not creating another variable we have to use the key to take a particular value out of it.

// function timeAgo(dateString) {
//   // Parse the given date string into a Date object
//   let givenDate = new Date(dateString);

//   // Get the current date and time
//   let currentDate = new Date();

//   // Calculate the difference in milliseconds
//   let differenceInMillis = currentDate - givenDate;

//   // Convert milliseconds to hours
//   let differenceInHours = differenceInMillis / (1000 * 60 * 60);

//   // Determine the appropriate message based on the time difference
//   if (differenceInHours < 1) {
//     return "Less than an hour ago";
//   } else if (differenceInHours >= 1 && differenceInHours < 2) {
//     return "1 hour ago";
//   } else if (differenceInHours >= 2 && differenceInHours < 24) {
//     return `${Math.ceil(differenceInHours)} hours ago`;
//   } else if (differenceInHours >= 24 && differenceInHours < 48) {
//     return "1 day ago";
//   } else if (differenceInHours >= 48 && differenceInHours < 168) {
//     return `${Math.ceil(differenceInHours / 24)} days ago`;
//   } else {
//     return "1 week ago";
//   }
// }

// let dateStr = "2024-05-08T04:07:33Z";
// let timeDifferenceMessage = timeAgo(dateStr);

// console.log(timeDifferenceMessage);

let obj = {
  name: "lakshay",
};

console.log(Object.keys(obj).length == 0);

let str = "Hello my name is lakshay";

console.log(str.slice(0, 5));
console.log(str);
