let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let start_btn = document.getElementsByClassName("start")[0];
let stop_btn = document.getElementsByClassName("stop")[0];
let reset_btn = document.getElementsByClassName("reset")[0];

let temp_milli = 0;
let temp_sec = 0;
let temp_min = 0;
let temp_hour = 0;
let temp = 0;
function run() {
  if (temp_sec == 59) {
    temp_sec = 0;
    if (temp_min == 59) {
      temp_min = 0;
      temp_hour++;
    } else {
      temp_min++;
    }
  } else {
    temp_sec++;
  }
  print();
}

function print() {
  seconds.innerText = temp_sec;
  minutes.innerText = temp_min;
  hours.innerText = temp_hour;
}
let clock;
start_btn.addEventListener("click", () => {
  clock = setInterval(run, 1000);
  start_btn.disabled = true;
  stop_btn.disabled = false;
});
stop_btn.addEventListener("click", () => {
  start_btn.disabled = false;
  stop_btn.disabled = true;
  clearInterval(clock);
  console.log("clicked");
});
reset_btn.addEventListener("click", () => {
  seconds.innerText = temp;
  minutes.innerText = temp;
  hours.innerText = temp;
  // print();
});
