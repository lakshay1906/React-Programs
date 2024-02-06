let arr = [8,3,9,2,5,1]; 

//simple for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("---------------------------------------");
//ForEach loop
arr.forEach((Element)=>{
    console.log(Element*Element);
})
console.log("---------------------------------------");
//Array.from
let name = "lakshay";
let array = Array.from(name);
console.log("---------------------------------------");
//for....of
for(let i  of arr)
{
    console.log(i);
}
console.log("---------------------------------------");
//for....in//this loop prints the key or index of the elements
for(let i in arr)
{
    console.log(i);
}