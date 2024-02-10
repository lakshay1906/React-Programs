console.log("Radhe Radhe");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliSecond = document.getElementById("milliSeconds");
let start_btn = document.getElementsByClassName("start")[0];
let stop_btn = document.getElementsByClassName("stop")[0];
let reset_btn = document.getElementsByClassName("reset")[0];

let temp_milli = 0;
let temp_sec = 0;
let temp_min = 0;
let temp_hour = 0;

function run() {
  if (temp_milli == 10) {
    temp_milli = 0;
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
  } else {
    temp_milli++;
  }
  print();
}

function print() {
  let gethr = temp_hour;
  let getsec = temp_sec;
  let getmin = temp_min;
  let getmilli = temp_milli;
  if (getmilli < 10) {
    getmilli = "0" + getmilli;
  }
  if (getsec < 10) {
    console.log(getsec);
    getsec = "0" + getsec;
  }
  if (getmin < 10) {
    getmin = `0${getmin}`;
  }
  if (gethr < 10) {
    gethr = "0" + gethr;
  }
  milliSecond.innerText = getmilli;
  seconds.innerText = getsec;
  minutes.innerText = getmin;
  hours.innerText = gethr;
}
let clock;
start_btn.addEventListener("click", () => {
  clock = setInterval(run, 100);
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
  clearInterval(clock);
  start_btn.disabled = false;
  stop_btn.disabled = true;
  temp_hour = 0;
  temp_min = 0;
  temp_sec = 0;
  temp_milli = 0;
  milliSecond.innerText = "00";
  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
});
