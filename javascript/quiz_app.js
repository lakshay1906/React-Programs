let d = document;
let card = d.getElementsByClassName("card")[0];
let dis_ques = d.querySelector("h3");
let dis_op1 = d.getElementsByClassName("option1")[0];
let dis_op2 = d.getElementsByClassName("option2")[0];
let dis_op3 = d.getElementsByClassName("option3")[0];
let dis_op4 = d.getElementsByClassName("option4")[0];
let next_btn = d.getElementsByClassName("next")[0];
let p = d.getElementsByClassName("explaination")[0];
let start_btn = d.getElementsByClassName("start")[0];
let scoreboard = d.getElementsByClassName("scoreboard")[0];
let result = d.getElementsByClassName("result")[0];
let try_again = d.getElementsByClassName("try-again")[0];
// console.dir(dis_op1);

let question = [
  "_______ is the smallest unit of data in a computer ?",
  "What is the full form of PROM ?",
  "In the context of computing, what is the full form of URL ?",
  "A computer on the Internet that uses HTTP protocol is known as: ?",
  "A database used by Microsoft Windows for storing configuration information is known as: ?",
];
let option1 = [
  "Gigabyte",
  "Program read-only memory",
  "Undistributed Resource Locator",
  "LAN",
  "Registry",
];
let option2 = [
  "Terabyte",
  "Primary read-only memory",
  "Unified Resource Locator",
  "Web Server",
  "Record",
];
let option3 = [
  "Bit",
  "Programmable read-only memory",
  "Uniform Resource Locator",
  "WAP",
  "Cookie",
]; //1st, 2nd
let option4 = [
  "Byte",
  "Program read-output memory",
  "Uniform Region Locator",
  "WLAN",
  "Cache",
];
let explanation = [
  "Bit is the smallest unit of data in a computer. 8 bit = 1 byte 1024 byte = 1 Kilobyte 1024 Kilobyte = 1 Megabyte 1024 Megabyte = Gigabyte 1024 Gigabytes = 1 Terabyte",
  "PROM or Programmable read-only memory is a computer memory chip that can be programmed once after it is created. Once the PROM is programmed, the information written is permanent and cannot be erased or deleted.",
  "A Uniform Resource Locator (URL) is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it.",
  "A computer on the Internet that uses HTTP protocol is known as Web Server.",
  "The system registry is one of the most important parts of a Windows-based computer system. The registry is a system-defined database used by the Windows operating system to store configuration information.",
];

let i = 0;
next_btn.classList.add("next_js");
function quiz() {
  check();
  dis_ques.innerText = question[i];
  dis_op1.innerText = option1[i];
  dis_op2.innerText = option2[i];
  dis_op3.innerText = option3[i];
  dis_op4.innerText = option4[i];
  p.innerText = explanation[i];
}
start_btn.addEventListener("click", () => {
  quiz();
  start_btn.classList.add("start_js");
  i++;
  // next_btn.classList.remove('next_js');
});

let temp = 0;

// dis_op1.addEventListener("click", () => {
//   if (i === 0) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op1.classList.add("wrong_js");
//   }
//   if (i === 1) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op1.classList.add("wrong_js");
//   }
//   if (i === 2) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op1.classList.add("wrong_js");
//   }
//   if (i === 3) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op1.classList.add("wrong_js");
//   }
//   if (i === 4) {
//     temp++;
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op1.classList.add("right_js");
//   }
//   dis_op1.disabled = true;
//   dis_op2.disabled = true;
//   dis_op3.disabled = true;
//   dis_op4.disabled = true;
// });
// dis_op2.addEventListener("click", () => {
//   if (i === 0) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op2.classList.add("wrong_js");
//   }
//   if (i === 1) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op2.classList.add("wrong_js");
//   }
//   if (i === 2) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op2.classList.add("wrong_js");
//   }
//   if (i === 3) {
//     temp++;
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op2.classList.add("right_js");
//   }
//   if (i === 4) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op2.classList.add("wrong_js");
//   }
//   dis_op1.disabled = true;
//   dis_op2.disabled = true;
//   dis_op3.disabled = true;
//   dis_op4.disabled = true;
// });
// dis_op3.addEventListener("click", () => {
//   if (i === 0) {
//     temp++;
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op3.classList.add("right_js");
//   }
//   if (i === 1) {
//     temp++;
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op3.classList.add("right_js");
//   }
//   if (i === 2) {
//     temp++;
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//   }
//   if (i === 3) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op3.classList.add("wrong_js");
//   }
//   if (i === 4) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op3.classList.add("wrong_js");
//   }
//   dis_op1.disabled = true;
//   dis_op2.disabled = true;
//   dis_op3.disabled = true;
//   dis_op4.disabled = true;
// });
// dis_op4.addEventListener("click", () => {
//   if (i === 0) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op4.classList.add("wrong_js");
//   }
//   if (i === 1) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op4.classList.add("wrong_js");
//   }
//   if (i === 2) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op4.classList.add("wrong_js");
//   }
//   if (i === 3) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op4.classList.add("wrong_js");
//   }
//   if (i === 4) {
//     p.classList.add("explaination_js");
//     next_btn.classList.remove("next_js");
//     dis_op4.classList.add("wrong_js");
//   }
//   dis_op1.disabled = true;
//   dis_op2.disabled = true;
//   dis_op3.disabled = true;
//   dis_op4.disabled = true;
// });

function check() {
  if (i === 0) {
    dis_op1.addEventListener("click", () => {
      console.log("option 1 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op1.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op2.addEventListener("click", () => {
      console.log("option 2 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op2.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op3.addEventListener("click", () => {
      console.log("option 3 clicked! " + i);
      temp++;
      // console.log("Right " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op3.classList.add("right_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op4.addEventListener("click", () => {
      console.log("option 4 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op4.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
  }
  if (i === 1) {
    dis_op1.addEventListener("click", () => {
      console.log("option 1 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op1.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op2.addEventListener("click", () => {
      console.log("option 2 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op2.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op3.addEventListener("click", () => {
      console.log("option 3 clicked! " + i);
      temp++;
      // console.log("Right " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op3.classList.add("right_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op4.addEventListener("click", () => {
      console.log("option 4 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op4.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
  }
  if (i === 2) {
    dis_op1.addEventListener("click", () => {
      console.log("option 1 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op1.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op2.addEventListener("click", () => {
      console.log("option 2 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op2.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op3.addEventListener("click", () => {
      console.log("option 3 clicked! " + i);
      temp++;
      // console.log("Right " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op3.classList.add("right_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op4.addEventListener("click", () => {
      console.log("option 4 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op4.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
  }
  if (i === 3) {
    dis_op1.addEventListener("click", () => {
      console.log("option 1 clicked! " + i);
      // console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op1.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op2.addEventListener("click", () => {
      console.log("option 2 clicked! " + i);
      temp++;
      console.log("Right " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op2.classList.add("right_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op3.addEventListener("click", () => {
      console.log("option 3 clicked! " + i);
      console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op3.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op4.addEventListener("click", () => {
      console.log("option 4 clicked! " + i);
      console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op4.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
  }
  if (i === 4) {
    dis_op1.addEventListener("click", () => {
      console.log("option 1 clicked! " + i);
      temp++;
      console.log("Right " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op1.classList.add("right_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op2.addEventListener("click", () => {
      console.log("option 2 clicked! " + i);
      console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op2.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op3.addEventListener("click", () => {
      console.log("option 3 clicked! " + i);
      console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op3.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
    dis_op4.addEventListener("click", () => {
      console.log("option 4 clicked! " + i);
      console.log("wrong " + i);
      p.classList.add("explaination_js");
      next_btn.classList.remove("next_js");
      dis_op4.classList.add("wrong_js");
      dis_op1.disabled = true;
      dis_op2.disabled = true;
      dis_op3.disabled = true;
      dis_op4.disabled = true;
    });
  }
}
next_btn.addEventListener("click", () => {
  quiz();
  // if (i == 1) {
  //   console.log(`question exist ${i}`);
  // } else {
  //   console.log(`question doesn't exist ${i}`);
  // }
  console.log(temp);
  next_btn.innerText = "Next";
  if (i >= question.length) {
    card.classList.add("card_js");
    scoreboard.classList.add("scoreboard_js");
    result.innerText = `Your Score is ${temp}/5`;
    console.log(temp);
  } else {
    i++;
    p.classList.remove("explaination_js");

    dis_op1.classList.remove("right_js");
    dis_op1.classList.remove("wrong_js");
    dis_op2.classList.remove("right_js");
    dis_op2.classList.remove("wrong_js");
    dis_op3.classList.remove("right_js");
    dis_op3.classList.remove("wrong_js");
    dis_op4.classList.remove("right_js");
    dis_op4.classList.remove("wrong_js");
  }
  next_btn.classList.add("next.js");
  dis_op1.disabled = false;
  dis_op2.disabled = false;
  dis_op3.disabled = false;
  dis_op4.disabled = false;
});
try_again.addEventListener("click", () => {
  card.classList.remove("card_js");
  scoreboard.classList.remove("scoreboard_js");
  i = 0;
  temp = 0;
  dis_ques.innerText = "Your Question will Appear here Just Press START";
  dis_op1.innerText = "Option1";
  dis_op2.innerText = "Option2";
  dis_op3.innerText = "Option3";
  dis_op4.innerText = "Option4";
  dis_op1.disabled = false;
  dis_op2.disabled = false;
  dis_op3.disabled = false;
  dis_op4.disabled = false;
  p.classList.remove("explaination_js");
  next_btn.classList.add("next_js");
  dis_op1.classList.remove("right_js");
  dis_op1.classList.remove("wrong_js");
  dis_op2.classList.remove("right_js");
  dis_op2.classList.remove("wrong_js");
  dis_op3.classList.remove("right_js");
  dis_op3.classList.remove("wrong_js");
  dis_op4.classList.remove("right_js");
  dis_op4.classList.remove("wrong_js");
  start_btn.classList.remove("start_js");
  next_btn.innerText = "START";
});
