// if(num<1000)
// {
    //     num =num*10;
    // }
    // else if(num<100)
    // {
        //     num = num*100;
// }
// else if(num<10)
// {
//     num = num*1000;
// }


// let num = Math.random()*10000;
// num = Math.floor(num);
// let    = num.toString();
// if(str.length == 3)
// {
//     str = str*10;
//     console.log(str);
// }
// else if(str.length==2)
// {
//     str = str*100;
//     console.log(str);
// }
// else if(str.length==1)
// {
//     str= str*1000;
//     console.log(str);
// }
// else{
    
//     console.log(str);
// }


let num = Math.floor(Math.random()*10000);
let str = num.toString();
let str1= str.padEnd(4,0);
alert("Your otp is: " +str1);