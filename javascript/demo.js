console.log("Radhe Radhe");
// function hacker_terminal(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`${data}....`);
//             resolve("Success");
//         },2000);
//         // resolve("Success");          // mistake.........
//     });
// }
// async function abc(){
//     await hacker_terminal("Downloading the virus");
//     await hacker_terminal("Initialising Data");
//     await hacker_terminal("Deleting the data");
//     await hacker_terminal("You are completly HACKED");
// }
// abc();

// setInterval(()=>{
//   let num = 0;
//   str = ++num;
//   let str1 = new String(str)
//   console.log(str1.padStart(2, '0'));
//   // let num1 = new Number(str1);
// },1000);

// ????????????????????? how to increment a number and also making the number of at least 2 digits by adding zero in the start

let d = document;
// let btn1 = d.getElementsByClassName('btn1')[0];
// let btn2 = d.getElementsByClassName('btn2')[0];
// let btn3 = d.getElementsByClassName('btn3')[0];
// let btn4 = d.getElementsByClassName('btn4')[0];
// let btn5 = d.getElementsByClassName("btn5")[0];
// let remove = d.getElementsByClassName('remove')[0];
// let para = d.querySelector('p');

// btn1.addEventListener('click',()=>{
//   para.classList.add('js');
// })
// btn2.addEventListener('click',()=>{
//   para.classList.add('js');
// })
// btn3.addEventListener('click',()=>{
//   para.classList.add('js');
// })
// btn4.addEventListener('click',()=>{
//   para.classList.add('js');
// })
// btn5.addEventListener('click',()=>{
//   para.classList.add('js');
// })
// remove.addEventListener('click',()=>{
//   para.classList.remove('js');
// })

// let arr = [0, 1, 2, 3, 4, 5];
// console.log(arr[4]);
// let arr_2 = { ...arr };
// console.log(arr_2);
// arr_2[4] = 10;
// console.log(arr);
// console.log(typeof arr);

// Practice for add to cart

// let arr = [1, 2, 3, 45, 6, 7];
// let total = arr.reduce((a, b) => a + b, 0);
// console.log(total);
// let obj = [
//   {
//     Name: "a",
//     value: 1,
//   },
//   {
//     Name: "b",
//     value: 2,
//   },
//   {
//     Name: "c",
//     value: 3,
//   },
//   {
//     Name: "d",
//     value: 4,
//   },
//   {
//     Name: "e",
//     value: 5,
//   },
//   {
//     Name: "f",
//     value: 10,
//   },
// ];

// let objTotal = obj.map((ele) => ele.value).reduce((a, b) => a + b, 0);
// console.log(objTotal);

// Sample array of 10 objects
// let array = [
//   { id: 1, name: "Object 1" },
//   { id: 2, name: "Object 2" },
//   { id: 3, name: "Object 3" },
//   { id: 4, name: "Object 4" },
//   { id: 5, name: "Object 5" },
//   { id: 6, name: "Object 6" },
//   { id: 7, name: "Object 7" },
//   { id: 8, name: "Object 8" },
//   { id: 9, name: "Object 9" },
//   { id: 10, name: "Object 10" },
// ];

// // Function to remove an element by object's id
// function removeElementById(array, id) {
//   let index = array.findIndex((obj) => obj.id === id);
//   array.splice(index, 1);
//   console.log(array);
// }

// removeElementById(array, 8);

function toggleDescription(element) {
  const fullDescription = element.nextElementSibling;
  if (fullDescription.classList.contains("hidden")) {
    fullDescription.classList.remove("hidden");
    element.classList.add("hidden");
  } else {
    fullDescription.classList.add("hidden");
    element.classList.remove("hidden");
  }
}
