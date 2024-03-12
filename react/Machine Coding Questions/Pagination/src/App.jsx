import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Filter_btn from "./Components/Filter_btn";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);
  console.log("Radhe Radhe");
  async function fetchData() {
    let rawData = await fetch("https://dummyjson.com/products?limit=100");
    let data = await rawData.json();
    setData(data);
    console.log(data);
    setShowCards(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Filter_btn />
      {showCards && (
        <div className="flex flex-wrap px-4 gap-x-2 gap-y-4 py-10 overflow-y-auto">
          {data.products.map((ele) => {
            return (
              <Card
                imgLink={ele.thumbnail}
                brandName="Apple"
                productName="iPhone 9"
                desc="An apple mobile which is nothing like apple"
                price="70000"
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
