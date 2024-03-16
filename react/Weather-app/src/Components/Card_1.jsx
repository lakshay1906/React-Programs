import "./Card.css";
import { useState, useMemo } from "react";
import { BsSearch } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";
import { FiWind } from "react-icons/fi";

let d = document;

function Card() {
  const [src, changeSrc] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("");
  const [render, setRender] = useState(false);

  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumitdity] = useState("");
  const [speed, setSpeed] = useState("");

  async function weather_app(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4be9a29edd8195df84120d94059fc8ff&units=metric`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setData(data);
      // setLocation(data.name);
      // setTemp(Math.round(data.main.temp) + "°c");
      // setHumitdity(data.main.humidity + "%");
      // setSpeed(data.wind.speed + "kmph");
      // d.getElementsByClassName("dis-none")[2].innerText = "Humidity";
      // d.getElementsByClassName("dis-none")[3].innerText = "Wind-Speed";
      setRender(true);

      if (data.weather[0].main === "Clear") {
        changeSrc("./src/assets/images/clear.png");
      } else if (data.weather[0].main === "Clouds") {
        changeSrc("./src/assets/images/cloud.png");
      } else if (
        data.weather[0].main === "Haze" ||
        data.weather[0].main === "Mist"
      ) {
        changeSrc("./src/assets/images/mist.png");
      } else if (data.weather[0].main === "Rain") {
        changeSrc("./src/assets/images/rain.png");
      } else if (data.weather[0].main === "Snow") {
        changeSrc("./src/assets/images/snow.png");
      }
    } catch (error) {
      console.log("error occured");
      // setLocation(null);
      // setTemp(city + "  Place Not Found");
      // setHumitdity(null);
      // setSpeed(null);
      setRender(false);

      changeSrc("./src/assets/images/404.png");
    }
  }

  useMemo(() => {
    weather_app(cityName ? cityName : "Faridabad");
  }, [cityName, render]);

  render && (
    <>
      <div className="card">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Location...."
            className="input-box"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              setCityName(inputValue);
              weather_app(cityName); // Uncomment this line and useMemo and then try to call this function this is running one value after
            }}
          >
            <BsSearch size={"1.9rem"} />
          </button>
        </div>
        <img className="image" id="image" src={src} />
        <h1 className="temp">{Math.round(data.main.temp) + "°c"}</h1>
        <h1 className="location">{data.name}</h1>
        <div className="other-info">
          <div className="humidity">
            <LuWaves className="dis-none" size={"2.4rem"} />
            <span className="humid">{data.main.humidity + "%"}</span>
          </div>
          <div className="wind-speed">
            <FiWind className="dis-none" size={"3.2rem"} />
            <span className="speed">{data.wind.speed + "kmph"}</span>
          </div>
        </div>
        <div className="label">
          <div className="dis-none">Humidity</div>
          <div className="dis-none">Wind-Speed</div>
        </div>
      </div>
    </>
  );
}

export default Card;
