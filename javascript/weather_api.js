let d = document;
let search_input = d.getElementById("search-input");
let search_btn = d.getElementById("search-btn");
let card_location = d.getElementById("card-location");
let max_temp = d.getElementById("max-temp");
let min_temp = d.getElementById("min-temp");
let humidity = d.getElementById("humidity");
let wind_speed = d.getElementById("wind_speed");
let wind_degrees = d.getElementById("wind_degrees");
let cloud_pct = d.getElementById("cloud_pct");
let sunrise = d.getElementById("sunrise");
let sunset = d.getElementById("sunset");
let quote = d.getElementById("quote");
let loading = d.getElementById("loading");
let loader = d.getElementById("loader");
loading.classList.remove("over-the-page");
loader.classList.remove("loader");

search_btn.addEventListener("click", () => {
  card_location.innerText = search_input.value;
  loading.classList.add("over-the-page");
  loader.classList.add("loader");
  weather(search_input.value);
});

async function weather(city) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4be9a29edd8195df84120d94059fc8ff&units=metric`
  );
  let data = await res.json();
  loading.classList.remove("over-the-page");
  loader.classList.remove("loader");
  console.log(data);
}

search_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search_btn.click();
  }
});
