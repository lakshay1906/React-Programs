import { useState, useEffect, useMemo } from "react";
import CurrencyConverter from "./Components/CurrencyConverter";

function App() {
  console.log("Radhe Radhe");
  const [apiData, setApiData] = useState({});
  const [currencies, setCurrencies] = useState({});
  const [load, setLoad] = useState(false);
  const [finalLoad, setFinalLoad] = useState(false);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("AUD");
  const [to, setTo] = useState("USD");
  const currencyURL = `https://api.frankfurter.app/currencies`;

  async function fetchData() {
    if (amount > 0) {
      if (from == to) {
        alert("From and To are equal\nThis is not possible!!");
        return;
      }
      const conversionURL = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
      try {
        const response = await fetch(conversionURL);
        const result = await response.json();
        console.log(result);
        setApiData(result);
        setFinalLoad(true);
      } catch (error) {
        console.error(error);
      }
    }
  }
  function fetchCurrencies() {
    (async function () {
      try {
        const response = await fetch(currencyURL);
        const result = await response.json();
        console.log(result);
        setCurrencies(result);
        setLoad(true);
      } catch (error) {
        console.error(error);
      }
    })();
  }

  useEffect(() => fetchCurrencies(), []);

  return (
    load && (
      <>
        <div className="text-2xl w-full h-screen flex justify-center items-center bg-[#292929]">
          <CurrencyConverter
            data={apiData}
            currenciesData={currencies}
            fromValue={from}
            setFromFunc={setFrom}
            toValue={to}
            setToFunc={setTo}
            amountValue={amount}
            setAmountFunc={setAmount}
            conversionFunc={fetchData}
            load={finalLoad}
          />
        </div>
      </>
    )
  );
}

export default App;
