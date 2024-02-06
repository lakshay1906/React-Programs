let base = +prompt("Enter the Base: ");
let ex = +prompt("Enter the exponent: ");
let result=1;
for(let i=1;i<=ex;i++)
{
    result = result*base;
}
console.log(result);