console.log("Radhe Radhe");

// 01
// Destructuring an array
//      CODE
// let arr = ["item1", "item2", "item3"];
// let [myarr1, , myarr2] = arr; // we can also assume this line as myarr1 = arr[0]; myarr2 = arr[1];
// console.log(myarr1, myarr2);
// destructuring means passing the value of an object or an array into a particular variable.

// 02
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

// 03
// Every Method
// let num = [2, 4, 6, 8, 10];
// let res = num.every((num) => num % 2 === 0); // Working is Same as &&(AND)operator.
// let res_1 = num.every((num) => {
//   num % 2 === 0;
// });
// console.log(res);
// console.log(res_1);     //Why res_1 returning false.

// 04
// Some Method
// let num = [3, 5, 7, 8, 11];
// let res = num.some((num) => num % 2 === 0);  // Working is Same as ||(OR)Operator.
// console.log(res);

// 05
// Fill Method
// let arr = new Array(10).fill(-1);
// console.log(arr);

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.fill(0, 2, 5);   // arr.fill(what to fill, start, end)
// console.log(arr);
// it will change the original array

// 06
// Splice Method
// This method is used to delete and insert also

// To delete from array
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

// 07

// Array.from()
// let str = "Lakshay";
// let arr = Array.from(str); // Array.from is a method that creates a array from a string or a HTML Collection
// console.log(arr);

// 08
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

// 09
// Filter method in array
// let arr = [45, 23, 1, 56, 19, 3, 8];
// let filtered_arr = arr.filter((value) => {
//   return value > 10;    // returning the value which is greater than 10 from the array.
// });
// console.log(filtered_arr);
// this method is used to filter the array.

// 10
// Reduce Method in array
// let arr = [0, 1, 2, 3, 4, 5];
// let new_arr = arr.reduce((h1, h2) => {
//   return h1 + h2;
// });
// console.log(new_arr);
