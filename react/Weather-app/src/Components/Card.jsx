import "./Card.css";
import { BsSearch } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
function Card() {
  return (
    <>
      <div className="card">
        <div className="search-box">
          <input type="text" placeholder="Enter Location...." />
          <button>
            <BsSearch />
          </button>
        </div>
        {/* <img src="https://th.bing.com/th/id/R.bea0624f5a707c869207941387039e3a?rik=58WxKZW%2fqa1QtA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-8tAJGPX_nQI%2fUFs2wWHoALI%2fAAAAAAAAAa8%2fqPuXbFIpO-s%2fs1600%2fSun_Kid.jpg&ehk=%2fleko7HnVjohtC8g1F7Li7GjXykY%2b9kNZJ6vtbnT0Ys%3d&risl=&pid=ImgRaw&r=0" /> */}
        <IoIosSunny color="yellow" size="5rem" />
        <h1>7*c</h1>
        <h1>Haryana</h1>
        <div className="other-info">
          <div className="humidity">48%</div>
          <div className="wind-speed">10.29 km/h</div>
        </div>
      </div>
    </>
  );
}

export default Card;
