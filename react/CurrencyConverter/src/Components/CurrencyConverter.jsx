import React, { useEffect, useState } from "react";
import { RiExchangeLine } from "react-icons/ri";

function CurrencyConverter({
  data,
  currenciesData,
  fromValue,
  setFromFunc,
  toValue,
  setToFunc,
  amountValue,
  setAmountFunc,
  conversionFunc,
  load,
}) {
  function onSwap() {
    setFromFunc(toValue);
    setToFunc(fromValue);
  }
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
                onChange={(e) => setFromFunc(e.target.value)}
                value={fromValue}
              >
                {Object.keys(currenciesData)
                  .sort()
                  .map((ele) => (
                    <option value={ele} key={ele}>
                      {ele}
                    </option>
                  ))}
              </select>
            </div>
            <RiExchangeLine size="2.8rem" onClick={() => onSwap()} />
            <div className="flex flex-col w-4/12">
              <label htmlFor="to">To</label>
              <select
                id="to"
                className="border border-black rounded-md"
                onChange={(e) => setToFunc(e.target.value)}
                value={toValue}
              >
                {Object.keys(currenciesData)
                  .sort()
                  .map((ele) => (
                    <option value={ele} key={ele}>
                      {ele}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <form
            className="flex flex-col items-center gap-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col w-full">
              <label htmlFor="amount">Enter Amount:</label>
              <input
                id="amount"
                type="number"
                min={0}
                className="border border-black px-2 py-1 rounded-md"
                onChange={(e) => setAmountFunc(e.target.value)}
                value={amountValue}
                required
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
                value={load && data.rates[toValue] ? data.rates[toValue] : 0}
              />
            </div>
            <button
              className="bg-blue-700 w-fit text-white px-3 py-1 rounded-md mt-3 "
              onMouseDown={() => conversionFunc()}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;

#React #ShoppingApp #WebDevelopment #Productivityspace #React #FolderOrganization #react #TechInnovation #realTimeData #memoization #reactJS #webDevelopment #javaScript #frontEnd #uiux #reactapp #codenewbie #techinnovation #programming #softwaredevelopment #webdev #developercommunity #digitaltransformation #techforgood #opensource #creativecoding #innovationhub #techskills #projectshowcase #learntocode