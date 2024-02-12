import "./Card.css";
import { BsSearch } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { WiDegrees } from "react-icons/wi";
import { LuWaves } from "react-icons/lu";
import { FiWind } from "react-icons/fi";
import { WiDayCloudy } from "react-icons/wi";

function Card() {
  async function weather_app(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4be9a29edd8195df84120d94059fc8ff&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.weather[0]);
    let d = document;
    d.getElementsByClassName("location")[0].innerText = data.name;
    d.getElementsByClassName("temp")[0].innerHTML =
      Math.round(data.main.temp) + "°c";
    d.getElementsByClassName("humid")[0].innerText = data.main.humidity + "%";
    d.getElementsByClassName("speed")[0].innerText = data.wind.speed + "kmph";
    // d.getElementsByClassName('practice')[0].innerHTML =
  }
  return (
    <>
      <div className="card">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Location...."
            className="input-box"
          />
          <button
            className="search-btn"
            onClick={() => {
              let cityName =
                document.getElementsByClassName("input-box")[0].value;
              weather_app(cityName);
            }}
          >
            <BsSearch size={"1.2rem"} />
          </button>
        </div>
        {/* <div className="practice">
          <WiDayCloudy size={"3rem"} />
        </div> */}
        <IoIosSunny color="yellow" size="7rem" />
        <h1 className="temp">7{/* <WiDegrees size={"5rem"} />c */}</h1>
        <h1 className="location">Haryana</h1>
        <div className="other-info">
          <div className="humidity">
            <LuWaves size={"1.5rem"} />
            <span className="humid">48%</span>
          </div>
          <div className="wind-speed">
            <FiWind size={"2rem"} />
            <span className="speed">10.29 km/h</span>
          </div>
        </div>
        <div className="label">
          <div>Humidity</div>
          <div>Wind Speed</div>
        </div>
      </div>
    </>
  );
}

export default Card;
