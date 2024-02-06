// alert("Radhe Radhe");
let num = Math.ceil(Math.random()*100);

console.log(num);
let guess = 0, temp =0;
do{ 
    guess = +prompt("Guess the number: ");
    if(guess==num)
    {
        alert("You got it right");
        break;
    }
    else if(guess<num)
    {
        alert("The actual number is big.");
    }
    else{
        alert("The actual number is small.");
    }
    temp = temp+1;
}while(guess != num);
alert("Attempts made to guess: "+temp);
let score = 10-temp;
alert("You scored: "+score+"out of 10");