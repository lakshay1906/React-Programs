import { useState, useEffect } from "react";
import Card from "./Components/Card";

function App() {
  console.log("Radhe Radhe");
  const [apiData, setApiData] = useState(null);

  async function getData() {
    const raw_data = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
    );
    const data = await raw_data.json();
    setApiData(data);
    console.log("Data is fetched");
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    apiData && (
      <div
        id="body"
        className="w-full h-screen bg-[url('https://wallpapercave.com/wp/wp7422937.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center"
      >
        <Card data={apiData} />
      </div>
    )
  );
}

export default App;
