import "./App.css";
import Card from "./Components/Card_1";

function App() {
  let theme = false;
  function themeValidation() {
    if (theme) {
      document.getElementsByClassName("theme")[0].innerHTML = "Light Mode";
      document.body.style.backgroundColor = "#292929";
      document.getElementsByClassName("theme")[0].style.backgroundColor =
        "#fff";
      document.getElementsByClassName("theme")[0].style.color = "black";
      theme = false;
    } else {
      document.getElementsByClassName("theme")[0].innerHTML = "Dark Mode";
      document.body.style.backgroundColor = "#fff";
      document.getElementsByClassName("theme")[0].style.backgroundColor =
        "#000";
      document.getElementsByClassName("theme")[0].style.color = "white";
      theme = true;
    }
  }
  return (
    <>
      <button
        className="theme"
        onClick={() => {
          themeValidation();
        }}
      >
        Light Mode
      </button>
      <Card />
    </>
  );
}

export default App;
