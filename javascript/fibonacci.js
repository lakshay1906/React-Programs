let num = +prompt("Enter the numbers you want: ")
let a = 0;
let b = 1;
for(let i=0;i<=num;i++)
{
    result = (a+b);
    console.log(result);
    a = b;
    b = result;
}