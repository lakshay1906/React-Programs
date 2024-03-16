console.log("Radhe Radhe");
let ul = document.querySelector("ul");
let list = document.querySelector("li");
let data;
let img = document.getElementById("img");
let name = document.getElementById("name");
let age = document.getElementById("age");
let address = document.getElementById("address");
let email = document.getElementById("email");
let number = document.getElementById("phn-no");
let dob = document.getElementById("dob");
let add_btn = document.getElementById("add-emp");

// console.dir(name);

let localData = localStorage.getItem("data");
let parsedData = JSON.parse(localData);
// parsedData.push(5);
console.log(parsedData);
(async function () {
  let rawData = await fetch("./data.json");
  data = await rawData.json();
  //   console.log(JSON.parse(localData));
  let finalData = JSON.parse(localData) ? JSON.parse(localData) : data;
  console.log(finalData);

  for (const key of finalData) createEle(key);
})();

function createEle(ele) {
  if (ele.firstName) {
    let li = document.createElement("li");
    li.setAttribute("class", "data");
    li.innerText = `${ele.firstName} ${ele.lastName}`;
    ul.appendChild(li);
  }
}
ul.addEventListener("click", (e) => {
  let firstName = e.target.innerText.split(" ")[0];
  display(firstName);
});

function display(firstName) {
  let personalData = {};
  for (const key of data) {
    for (const single in key) {
      if (key[single] === firstName) {
        personalData = key;
      }
    }
  }
  //   console.log(personalData.firstName);
  img.setAttribute("src", personalData.imageUrl);
  name.innerText = `${personalData.firstName} ${personalData.lastName}`;
  age.innerText = ` (${personalData.age})`;
  address.innerText = personalData.address;
  email.innerText = personalData.email;
  number.innerText = personalData.contactNumber;
  dob.innerText = personalData.dob;
}
let personData = {};
add_btn.addEventListener("click", () => {
  let firstName = prompt("Enter First Name");
  let lastName = prompt("Enter Last Name");
  let img = prompt("Enter Profile Image link");
  let age = prompt("Enter Age");
  let address = prompt("Enter Address");
  let email = prompt("Enter Email");
  let number = prompt("Enter number");
  let dob = prompt("Enter dob");

  personData = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
    email: email,
    contactNumber: number,
    dob: dob,
    imageUrl: img,
  };
  if (personData.firstName !== "") parsedData.push(personData);
  console.log(personData.firstName);
  console.log(parsedData);
  createEle(personData);
  localStorage.setItem("data", JSON.stringify(parsedData));
});
// localStorage.clear();
