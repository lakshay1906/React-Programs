import "./Card.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { LuWaves } from "react-icons/lu";
import { FiWind } from "react-icons/fi";

let d = document;

function Card() {
  const [src, changeSrc] = useState("");
  async function weather_app(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4be9a29edd8195df84120d94059fc8ff&units=metric`;
    d.getElementsByClassName("dis-none")[0].style.display = "none";
    d.getElementsByClassName("dis-none")[1].style.display = "none";

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.weather[0]);
      d.getElementsByClassName("location")[0].innerText = data.name;
      d.getElementsByClassName("temp")[0].innerHTML =
        Math.round(data.main.temp) + "°c";
      d.getElementsByClassName("humid")[0].innerText = data.main.humidity + "%";
      d.getElementsByClassName("speed")[0].innerText = data.wind.speed + "kmph";
      d.getElementsByClassName("dis-none")[2].innerText = "Humidity";
      d.getElementsByClassName("dis-none")[3].innerText = "Wind-Speed";
      d.getElementsByClassName("dis-none")[0].style.display = "block";
      d.getElementsByClassName("dis-none")[1].style.display = "block";
      d.getElementsByClassName("dis-none")[2].style.display = "block";
      d.getElementsByClassName("dis-none")[3].style.display = "block";

      if (data.weather[0].main === "Clear") {
        console.log("clear");
        // changeSrc("./src/assets/images/clear.png");
        d.getElementById("image").setAttribute(
          "src",
          `./src/assets/images/clear.png`
        );
      } else if (data.weather[0].main === "Clouds") {
        // changeSrc("./src/assets/images/cloud.png");
        d.getElementById("image").setAttribute(
          "src",
          `./src/assets/images/cloud.png`
        );
      } else if (
        data.weather[0].main === "Haze" ||
        data.weather[0].main === "Mist"
      ) {
        // changeSrc("./src/assets/images/mist.png");
        d.getElementById("image").setAttribute(
          "src",
          `./src/assets/images/mist.png`
        );
      } else if (data.weather[0].main === "Rain") {
        // changeSrc("./src/assets/images/rain.png");
        d.getElementById("image").setAttribute(
          "src",
          `./src/assets/images/rain.png`
        );
      } else if (data.weather[0].main === "Snow") {
        changeSrc("./src/assets/images/snow.png");
        d.getElementById("image").setAttribute(
          "src",
          `./src/assets/images/snow.png`
        );
      }
    } catch (error) {
      console.log("error occured");
      d.getElementsByClassName("location")[0].innerText = null;
      d.getElementsByClassName("temp")[0].innerHTML = "Place Not Found";
      d.getElementsByClassName("humid")[0].innerText = null;
      d.getElementsByClassName("speed")[0].innerText = null;
      d.getElementsByClassName("dis-none")[0].style.display = "none";
      d.getElementsByClassName("dis-none")[1].style.display = "none";
      d.getElementsByClassName("dis-none")[2].style.display = "none";
      d.getElementsByClassName("dis-none")[3].style.display = "none";
      // changeSrc("./src/assets/images/404.png");
      d.getElementById("image").setAttribute(
        "src",
        `./src/assets/images/404.png`
      );
    }
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
        {/* <IoIosSunny color="yellow" size="7rem" /> */}
        <img className="image" id="image" />
        <h1 className="temp"></h1>
        <h1 className="location"></h1>
        <div className="other-info">
          <div className="humidity">
            <LuWaves className="dis-none" size={"1.5rem"} />
            <span className="humid"></span>
          </div>
          <div className="wind-speed">
            <FiWind className="dis-none" size={"2rem"} />
            <span className="speed"></span>
          </div>
        </div>
        <div className="label">
          <div className="dis-none"></div>
          <div className="dis-none"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
