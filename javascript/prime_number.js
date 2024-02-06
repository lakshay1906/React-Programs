let num = +prompt("Enter the number: ");
let temp=0;
for(let i=1;i<num;i++)
{
    if(num%i == 0)
    {
        temp= temp+1;
    }
}
if(temp<2)
{
    console.log("The number is prime.");
}
else
{
    console.log("The number is not prime.");
}