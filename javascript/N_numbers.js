let num = +prompt("Enter the number: ");
let result=0;
for(let i=1; i<=num;i++)
{
    result = result+i;
}
console.log(result);

//1. 0 = 0+1 =>1
//2. 1 = 1+2 =>3
//3. 3 = 3+3 =>6
//4. 9 = 6+4 =>10
//5. 13=10+5 =>15
//6. 18=15+6 =>21
//7. 24=21+7 =>28
//8. 31=28+8 =>36
//9. 39=36+9 =>45
//10.48=45+10=>55