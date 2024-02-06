let div = document.createElement('div');
let text1 = document.createTextNode("this the div");
document.body.appendChild(div);
div.appendChild(text1);
div.classList.add("box");
div.setAttribute("id", "box1")
console.dir(div);
for (const attr of div.attributes) {
    console.log(attr.value);    
}
let form = document.forms[0];
let dishName = document.getElementById("dish_name");
// console.log(dishName.setAttribute("class" , "input1")); 
for (const attr of dishName.attributes) {
    console.log(attr.value);    
}