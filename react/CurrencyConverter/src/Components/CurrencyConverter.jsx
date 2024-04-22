import React, { useEffect, useState } from "react";
import { RiExchangeLine } from "react-icons/ri";

function CurrencyConverter({ data, setFromFunc, setToFunc }) {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  useEffect(() => {
    setCurrencyOptions(Object.keys(data));
    console.log(setFromFunc, setToFunc);
  }, []);
  return (
    <>
      <div className="bg-white w-7/12 min-h-[53%] text-xl text-black px-5 py-2 rounded-md flex flex-col items-center gap-y-3">
        <div className="w-full text-2xl underline">Currency Converter</div>
        <div className="w-full flex flex-col gap-y-3">
          <div className="flex justify-between items-end w-full">
            <div className="flex flex-col w-4/12">
              <label htmlFor="from">From</label>
              <select
                id="from"
                className="border border-black rounded-md"
                onChange={(e) => setFromFunc.setFrom(e.target.value)}
                value={setFromFunc.from}
              >
                {currencyOptions.sort().map((ele) => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <RiExchangeLine size="2.8rem" />
            <div className="flex flex-col w-4/12">
              <label htmlFor="to">To</label>
              <select
                id="to"
                className="border border-black rounded-md"
                onChange={(e) => setToFunc.setTo(e.target.value)}
                value={setToFunc.to}
              >
                {currencyOptions.sort().map((ele) => (
                  <option value={ele} key={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="amount">Enter Amount:</label>
            <input
              id="amount"
              type="number"
              min={0}
              className="border border-black px-2 py-1 rounded-md"
              value={100000}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="calcAmount">Calculated Amount:</label>
            <input
              id="calcAmount"
              type="number"
              readOnly
              min={0}
              className="border border-black px-2 py-1 rounded-md"
              value={100000}
            />
          </div>
        </div>

        <button className="bg-blue-700 w-fit text-white px-3 py-1 rounded-md mt-1">
          Convert
        </button>
      </div>
    </>
  );
}

export default CurrencyConverter;
