// function getdata(dataid)
// {
//     console.log(dataid);
//     console.log(`getting data ${dataid+1}`);
// }
// let promise = new Promise((resolve,reject)=>
// {
//     setTimeout(()=>{
//         getdata(1);
//         resolve("success");
//     },2000);
// })
// promise.then((res)=> {
//     let promise1 = new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             getdata(2)
//             resolve("success");
//         },2000);
//     })
//     promise1.then(()=>{
//         let promise2 = new Promise((resolve,reject)=>
//         {
//             setTimeout(()=>{
//                 getdata(3);
//                 resolve("success");
//             },2000);
//         })
//     })
// })

function getdata(dataid)
{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(dataid);
            resolve("success");
        },2000);
    })
}
getdata(1).then(()=>{
    return getdata(2);
}).then(()=>{
    return getdata(3);
}).then((res)=>{
    console.log(res);
})