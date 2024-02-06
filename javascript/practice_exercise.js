localStorage.setItem('name' , 'Lakshay');
let date = new Date();
if(date.getHours()<12){
    console.log('Good Morning '+localStorage.getItem('name'));
}
else if(date.getHours()>=12 && date.getHours()<16)
{
    console.log('Good Afternoon '+localStorage.getItem('name'));
}
else{
    console.log('Good Night '+localStorage.getItem('name'));
}
let btn = document.createElement('button');
document.body.appendChild(btn);
let temp = localStorage.getItem('temp') || 0;
btn.innerText = `clicked ${temp} times`;
btn.addEventListener('click', ()=>{
    temp ++;
    localStorage.setItem('temp', temp)
    btn.innerText = `clicked ${temp} times`
    if(temp%2 == 0){
        btn.setAttribute('class', 'blue');
    }
    else{
        btn.setAttribute('class', 'red');
    }
})