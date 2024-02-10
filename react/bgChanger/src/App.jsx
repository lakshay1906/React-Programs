import "./App.css";

function App() {
  let body = document.body;
  let bgColor = "red";
  return (
    <>
      <h1>Radhe Radhe</h1>
      <div className="box" style={{ backgroundColor: { bgColor } }}></div>
      <button onClick={() => (body.style.backgroundColor = "red")}>Red</button>
      <button onClick={() => (body.style.backgroundColor = "blue")}>
        Blue
      </button>
      <button onClick={() => (body.style.backgroundColor = "green")}>
        Green
      </button>
      <button onClick={() => (body.style.backgroundColor = "black")}>
        Black
      </button>
      <button onClick={() => (body.style.backgroundColor = "white")}>
        Default
      </button>
    </>
  );
}

export default App;
