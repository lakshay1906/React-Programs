import { useState, useEffect } from "react";
import CurrencyConverter from "./Components/CurrencyConverter";

function App() {
  console.log("Radhe Radhe");
  const [apiData, setApiData] = useState({});
  const [load, setLoad] = useState(false);
  const [from, setFrom] = useState("AUD");
  const [to, setTo] = useState("USD");
  const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=${from}&to=${to}%2CGBP`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6d11a5a83emsh7c9ccac87e2ff7dp1505adjsn3e3cd76f48ff",
      "X-RapidAPI-Host":
        "currency-conversion-and-exchange-rates.p.rapidapi.com",
    },
  };

  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.rates);
      setApiData(result.rates);
      setLoad(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    load && (
      <>
        <div className="text-2xl w-full h-screen flex justify-center items-center bg-[#292929]">
          <CurrencyConverter
            data={apiData}
            setFromFunc={{ from, setFrom }}
            setToFunc={{ to, setTo }}
          />
        </div>
      </>
    )
  );
}

export default App;
