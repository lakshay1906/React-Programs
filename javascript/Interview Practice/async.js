console.log("Radhe Radhe");
let d = document;
let head1 = d.querySelector(".heading1");
let head2 = d.querySelector(".heading2");
let head3 = d.querySelector(".heading3");
let head4 = d.querySelector(".heading4");
let head5 = d.querySelector(".heading5");

// setTimeout(() => {
//   head1.innerHTML = "One";
//   setTimeout(() => {
//     head2.innerHTML = "Two";
//     setTimeout(() => {
//       head3.innerHTML = "Three";
//       setTimeout(() => {
//         head4.innerHTML = "Four";
//         setTimeout(() => {
//           head5.innerHTML = "Five";
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// This situation is called callback hell when there is a situation of nexted callback or there are multiple callbacks inside eachother

function changingHeading(ele, data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ele.innerHTML = `${data}`;
      resolve("success");
    }, 2000);
  });
}

// Mistake:- I was writing the resolve and reject outside the setTimeout function and the result was the program is waiting for 2 seconds and then everything was changing on the third second. So the I have to write the resolve and reject statement inside the setTimeout Scope so that every promise get resolved only after two seconds.

async function abc() {
  await changingHeading(head1, "One");
  await changingHeading(head2, "Two");
  await changingHeading(head3, "Three");
  await changingHeading(head4, "Four");
  await changingHeading(head5, "Five");
}
abc();
