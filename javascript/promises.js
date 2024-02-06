// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a promise");
//     resolve(123);
// })

const getPromise = ()=>
{
    return new Promise((resolve, reject) =>{
        console.log("I'm a promise");
        // resolve("success");
        reject("error");
    })
}
console.log(getPromise());
// getPromise().then((res) => {
//     console.log("promise fulfilled", res);
// });
getPromise().catch((err)=>{console.log("promise not fulfilled")});

function asyncFunc1()
{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    })
}
console.log(asyncFunc1());
asyncFunc1().then((res) =>{
    console.log(res);
})