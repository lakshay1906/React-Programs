let display_val = document.getElementById("display");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul = document.getElementById("mul");
let divide = document.getElementById("divide");

function display(value) {
  display_val.value += value;
  plus.disabled = false;
  minus.disabled = false;
  mul.disabled = false;
  divide.disabled = false;
}
function clear_val() {
  display_val.value = ``; //??????????????why this isn't working
}
function cal() {
  display_val.value = eval(display_val.value);
}
function remove_val() {
  display_val.value -= value;
}
function disable() {
  plus.disabled = true;
  minus.disabled = true;
  mul.disabled = true;
  divide.disabled = true;
}
plus.disabled = true;
minus.disabled = true;
mul.disabled = true;
divide.disabled = true;
