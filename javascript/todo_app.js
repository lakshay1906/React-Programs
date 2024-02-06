let d = document;
let btn = d.getElementById('btn');
let input = d.querySelector('input');
btn.addEventListener('click', ()=>{
    createTask();
});
let temp = 1;
function createTask(){
    if(empty_str()){
        alert("You haven't entered any task.")
    }
    else{
        let div = d.createElement('div');
        d.body.appendChild(div);
        div.innerText = temp+". "+input.value;
        temp++;
        div.classList.add('task');
    }
}
function empty_str(){
    return_val = false;
    let str = input.value;
    let trimed_str = str.trim();
    if(trimed_str.length == 0){
        return_val = true;
    }
    return return_val;
}