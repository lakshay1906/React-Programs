let arr = [10,3,1,2,7,4,5];

for(let j=0;j<arr.length;j++)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] =temp;
        }
    }
}
console.log(arr);