function getdata(dataid)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(dataid);
        resolve("Success");
        // reject("error");
    },3000);
    })
}
async function getalldata(){
    console.log("Getting data 1.....");
    await getdata(1);
    console.log("Getting data 2.....");
    await getdata(2);
    console.log("Getting data 3.....");
    await getdata(3);
    console.log("Getting data 4.....");
    await getdata(4);
}
getalldata();
