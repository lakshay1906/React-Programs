const url = 'https://cat-fact.herokuapp.com/facts';

let promise = fetch(url);
console.log(promise);

async function promise_1()
{
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    for (let i=0;i<data.length;i++) {
        
        // setInterval(()=>{
        //     console.log(data[i].text);
        // },2000);
        console.log(data[i].text);
    }

}
promise_1();