let ta = document.getElementById('textarea');
let str = new String("Hello how are you");

let temp = 0;
function press(){
    // ta.setAttribute('value', str.charAt(temp)+ta.value);
    ta.innerText = str.charAt(temp)+ta.value;
    while(i<str.length)
    {
        temp =+ 1;
        
    }
    if(temp >str.length){
        temp = 0;
    }
}
console.log(ta.innerText);