let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn = true;
let wins =
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn){
            box.innerHTML = "X";
            turn = false;
        }
        else{
            box.innerHTML = "O";
            turn = true;
        }
        box.disabled = true;
    })
})
function reset_func()
{
    boxes.forEach((box)=>
    {
        box.innerHTML = ``;
        box.disabled = false;
    })
}