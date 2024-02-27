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

// let d = document;
// let btn1 = d.getElementsByClassName('btn1')[0];
// let btn2 = d.getElementsByClassName('btn2')[0];
// let btn3 = d.getElementsByClassName('btn3')[0];
// let btn4 = d.getElementsByClassName('btn4')[0];
// let btn5 = d.getElementsByClassName('btn5')[0];
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

let arr = [0, 1, 2, 3, 4, 5];
console.log(arr[4]);
let arr_2 = { ...arr };
console.log(arr_2);
arr_2[4] = 10;
console.log(arr);
console.log(typeof arr);
