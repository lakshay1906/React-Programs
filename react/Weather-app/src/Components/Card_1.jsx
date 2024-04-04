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
  const [cityName, setCityName] = useState("Faridabad");
  const [render, setRender] = useState(false);

  async function weather_app(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4be9a29edd8195df84120d94059fc8ff&units=metric`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

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
      setData(data);
      setRender(true);
    } catch (error) {
      const data = {
        main: {
          temp: "Place not found",
          humidity: null,
        },
        name: null,
        wind: {
          speed: null,
        },
      };
      setData(data);
      changeSrc("./src/assets/images/404.png");
    }
  }

  useMemo(() => {
    weather_app(cityName);
  }, [cityName, render]);

  return (
    <>
      {render && (
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
          <h1 className="temp">
            {typeof data.main.temp == "number"
              ? Math.round(data.main.temp) + "°c"
              : data.main.temp}
          </h1>
          <h1 className="location">{data.name}</h1>
          <div
            className="other-info"
            style={{ display: data.main.humidity ? "" : "none" }}
          >
            <div className="humidity">
              <LuWaves className="dis-none" size={"2.4rem"} />
              <span className="humid">
                {data.main.humidity ? data.main.humidity + "%" : null}
              </span>
            </div>
            <div className="wind-speed">
              <FiWind className="dis-none" size={"3.2rem"} />
              <span className="speed">
                {typeof data.wind.speed == "number"
                  ? data.wind.speed + "kmph"
                  : null}
              </span>
            </div>
          </div>
          <div
            className="label"
            style={{ display: data.main.humidity ? "" : "none" }}
          >
            <div className="dis-none">Humidity</div>
            <div className="dis-none">Wind-Speed</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
