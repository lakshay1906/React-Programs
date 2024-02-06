let d = document;
let search_input = d.getElementById('search-input');
let search_btn = d.getElementById('search-btn');
let card_location = d.getElementById('card-location');
let max_temp = d.getElementById('max-temp');
let min_temp = d.getElementById('min-temp');
let humidity = d.getElementById('humidity');
let wind_speed = d.getElementById('wind_speed');
let wind_degrees = d.getElementById('wind_degrees');
let cloud_pct = d.getElementById('cloud_pct');
let sunrise = d.getElementById('sunrise');
let sunset = d.getElementById('sunset');
let quote = d.getElementById('quote');
let loading = d.getElementById('loading');
let loader = d.getElementById('loader');
loading.classList.remove('over-the-page')
loader.classList.remove('loader');
search_btn.addEventListener('click',()=>{
    
    card_location.innerText = search_input.value;
    loading.classList.add('over-the-page');
    loader.classList.add('loader');
    checkweather(search_input.value);
});

async function checkweather(city){
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d11a5a83emsh7c9ccac87e2ff7dp1505adjsn3e3cd76f48ff',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url,options)
.then(response => response.json())
.then((response) => {
    console.log(response)
    loading.classList.remove('over-the-page');
    loader.classList.remove('loader')
    if(response.min_temp<25){
        quote.innerText = "To apprecaite the beauty of a snowflake it is necessary to stand out in the cold.";
    }
    else{
        quote.innerText = "Summertime. It was a song. It was a season. I wondered if that season would ever live inside of me.";

    }
    max_temp.innerText = "  "+response.max_temp+"°C";
    min_temp.innerText = "  "+response.min_temp+"°C";
    humidity.innerText = "  "+response.humidity;
    wind_speed.innerText = "  "+response.wind_speed+"kmh";
    wind_degrees.innerText = "  "+response.wind_degrees+"°";
    cloud_pct.innerText = "  "+response.cloud_pct;
    sunrise.innerText = "  "+response.sunrise;
    sunset.innerText = "  "+response.sunset;
})
.catch(err => console.log(err));
}