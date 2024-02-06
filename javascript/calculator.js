let display_val = document.getElementById("display");
function display(value)
{
    display_val.value += value;
}
function clear_val()
{
    display_val.value = ``; //??????????????why this isn't working
}
function cal()
{
    display_val.value = eval(display_val.value);
}
function remove_val()
{
    display_val.value -= value;
}