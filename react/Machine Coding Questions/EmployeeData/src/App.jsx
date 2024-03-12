import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  async function fetchData() {
    let rawData = await fetch("./src/assets/data.json");
    let allData = await rawData.json();
    setData(allData);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  return (
    <>
      <h1 className="text-2xl">Radhe Radhe</h1>
      <ul id="container"></ul>
    </>
  );
}
export default App;
