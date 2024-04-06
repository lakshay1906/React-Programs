let result = document.querySelector("p");
let win_res = document.getElementById("win-res");
let tie_res = document.getElementById("tie-res");
let lose_res = document.getElementById("lose-res");
let win = 0;
let lose = 0;
let tie = 0;
let random;
function numb() {
  random = Math.floor(Math.random() * 3);
  return arr[random];
}
let arr = ["Stone", "Paper", "Scissor"];
function Stone_func() {
  let res = numb();
  if (res === "Stone") {
    result.innerText = "Its a tie....Try Again!!";
    tie++;
  } else if (res === "Paper") {
    result.innerText = "You Lose.... :(";
    lose++;
  } else if (res === "Scissor") {
    result.innerText = "You Win.... :)";
    win++;
  }
  win_res.innerText = win;
  tie_res.innerText = tie;
  lose_res.innerText = lose;
}
function Paper_func() {
  let res = numb();
  // console.log(res);
  if (res === "Stone") {
    result.innerText = "You Win.... :)";
    win++;
  } else if (res === "Paper") {
    result.innerText = "Its a tie....Try Again!!";
    tie++;
  } else if (res === "Scissor") {
    result.innerText = "You Lose.... :(";
    lose++;
  }
  win_res.innerText = win;
  tie_res.innerText = tie;
  lose_res.innerText = lose;
}
function Scissor_func() {
  let res = numb();
  // console.log(res);
  if (res === "Stone") {
    result.innerText = "You Lose.... :(";
    lose++;
  } else if (res === "Paper") {
    result.innerText = "You Win.... :)";
    win++;
  } else if (res === "Scissor") {
    result.innerText = "Its a tie....Try Again!!";
    tie++;
  }
  win_res.innerText = win;
  tie_res.innerText = tie;
  lose_res.innerText = lose;
}
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  win = 0;
  lose = 0;
  tie = 0;
  result.innerText = "Result";
  win_res.innerText = "00";
  tie_res.innerText = "00";
  lose_res.innerText = "00";
});
function local_storage() {
  localStorage.setItem("Win", win);
  localStorage.setItem("Tie", win);
  localStorage.setItem("Lose", win);
}
// local_storage();
let temp = 0;
function reset1() {
  if (temp == 1000) {
    return;
  }
  setInterval(() => {
    console.log(`Radhe Radhe ${temp}`);
    temp++;
  });
  reset1();
}
reset1();
