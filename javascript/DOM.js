console.log("Radhe Radhe");
console.dir(document.body);
console.log(document.body);
console.log(document.head);

// console.log(document.body.innerHTML);
// console.log(document.body.innerText);
let text =document.body.childNodes[1].innerText;
console.log(text);
text = "This is the updated text."
console.log(text);
// let sect = document.querySelectorAll("section");
// console.log(sect);
let sect1 = document.querySelector(".sec");
console.log(sect1) //why this is printing only .sec1
sect1.style.textAlign = "center";
sect1.style.fontWeight = "bold";
sect1.style.fontSize = "24px";  //showing error while applying property to querySelectorAll
console.log(document.getElementsByTagName("li")[1].innerHTML);
let li = document.getElementsByTagName("li");
// let i=0;
for (let i of li) {
    i.innertext = "New Text "+i;
    // console.log("Radhe Radhe");
    i++;
}
// for (let i of li) {
//     console.log(document.getElementsByTagName("li")[i].innertext);
//     i++;
// }

console.log(document.getElementsByTagName("h1")[0].textContent);//In textContent attribute we can see the visibility: hidden; content as well the display: none; content....On The Other Hand we can only see the visible content
console.log(document.getElementsByTagName("h1")[0].innerText);

document.getElementsByTagName("h1")[0].append(" how are you");
console.log(document.getElementsByTagName("h1")[0].innerText);

let new_ele = document.createElement("div");
// let text_node = document.createTextNode("hey how are you");
// new_ele.append("text_node");
// console.log()

let h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerHTML = "<i>Radhe Radhe</i>";