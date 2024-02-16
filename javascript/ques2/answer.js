let arr = ["red", "blue", "green", "yellow"];
let m = document.getElementById("marquee");
console.log(m);
let temp = 0;

setInterval(() => {
  if (temp === 6) {
    temp = 0;
  } else {
    let color = arr[temp];
    m.style.color = color;
  }
  temp++;
}, 1000);
