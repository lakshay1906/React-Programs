import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Filter_btn from "./Components/Filter_btn";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [showCards, setShowCards] = useState(false);
  const [category, setCategory] = useState("lighting");
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
          {data.products
            .filter((ele) => {
              return ele.category === category;
            })
            .map((ele) => {
              console.log(ele);
              return (
                <Card
                  keys={ele.id}
                  imgLink={ele.thumbnail}
                  brandName={ele.brand}
                  productName={ele.title}
                  desc={ele.description}
                  price={ele.price}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

export default App;
