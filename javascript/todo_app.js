let d = document;
let btn = d.getElementById("btn");
let input = d.querySelector("input");
let container = d.getElementsByClassName("list-container")[0];
const array = [];

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});
btn.addEventListener("click", () => {
  createTask();
  input.value = "";
});

let temp = 0;
let delete_1;
let checked_val = true;
let li;
let image;

function createTask() {
  if (empty_str()) {
    alert("You haven't entered any task.");
  } else {
    li = d.createElement("li");
    li.innerText = input.value;
    array.push(input.value);
    li.style.listStyle = "circle";
    container.appendChild(li);
    image = d.createElement("img");
    image.setAttribute("class", "check-img");
    image.setAttribute("src", "/React-Programs/javascript/unchecked_1.jpg");
    // image.setAttribute("src", "/React-Programs/javascript/checked.png");
    li.appendChild(image);
    let span = d.createElement("img");
    span.setAttribute("src", "/React-Programs/javascript/Delete-Button.png");
    span.setAttribute("class", `delete`);
    li.appendChild(span);
    li.classList.add("task");
    delete_1 = d.getElementsByClassName("delete");
    temp++;
    localStorage.setItem("data", array);
    console.log(array);
  }
}

function empty_str() {
  return_val = false;
  let str = input.value;
  let trimed_str = str.trim();
  if (trimed_str.length == 0) {
    return_val = true;
  }
  return return_val;
}

container.addEventListener(
  "click",
  (e) => {
    if (e.target.classList.value === "delete") {
      e.target.parentElement.remove();
      array.pop();
      console.log(array);
    } else if (
      e.target.classList.value === "check-img" ||
      e.target.tagName === "LI"
    ) {
      if (checked_val) {
        // image.setAttribute("src", "/React-Programs/javascript/checked.png");
        e.target.parentElement.childNodes[1].src =
          "http://127.0.0.1:5500/React-Programs/javascript/checked.png";
        e.target.parentElement.style.textDecoration = "line-through";
        checked_val = false;
      } else {
        // image.setAttribute("src", "/React-Programs/javascript/unchecked_1.jpg");
        e.target.parentElement.childNodes[1].src =
          "http://127.0.0.1:5500/React-Programs/javascript/unchecked_1.jpg";
        e.target.parentElement.style.textDecoration = "none";
        checked_val = true;
      }
    }
  },
  false
);
