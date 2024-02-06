let joke = document.getElementById('joke');
let btn = document.getElementById('btn');
const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d11a5a83emsh7c9ccac87e2ff7dp1505adjsn3e3cd76f48ff',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};

async function gettingJoke(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        joke.innerText = result[0].joke;
    } catch (error) {
        console.error(error);
    }
}
