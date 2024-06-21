import { useState, useEffect } from "react";

function App() {
  const [cost, setCost] = useState(1000);
  const [interest, setInterest] = useState(10);
  const [fees, setFees] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const arr = [1, 2, 3, 4, 5];

  function calculateEmi() {
    // EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1] (per annum)

    const loanAmt = cost - downPayment;
    const rateOfInterest = interest / 100;
    const numberOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numberOfYears) /
      ((1 + rateOfInterest) ** tenure - 1);

    return Number(EMI / 12).toFixed(0);
  }

  function updateEmi(e) {
    if (!cost) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // function to calculate EMI
    const emi = calculateEmi(dp);
    setEmi(emi);
  }

  function updateDownPayment(e) {
    if (!cost) return;
    const emi = Number(e.target.value);
    setDownPayment(emi.toFixed(0));
  }

  return (
    <div className="w-11/12 flex flex-col items-center justify-around m-auto mb-10">
      <h1 className="text-3xl font-bold underline text-left self-start mt-3 mb-5">
        EMI Calculator
      </h1>
      <div className="h-[80%] w-full rounded flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="costOfAsset" className="text-xl">
            Total Cost of Asset:{" "}
          </label>
          <input
            type="number"
            id="costOfAsset"
            className="border border-black rounded px-2 py-1 text-lg"
            min={1}
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="interestRate" className="text-xl">
            Interest rate (in %):{" "}
          </label>
          <input
            type="number"
            id="interestRate"
            className="border border-black rounded px-2 py-1 text-lg"
            onChange={(e) => setInterest(e.target.value)}
            value={interest}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="processingFees" className="text-xl">
            Processing fees (in %):{" "}
          </label>
          <input
            type="number"
            id="processingFees"
            className="border border-black rounded px-2 py-1 text-lg"
            onChange={(e) => setFees(e.target.value)}
            value={fees}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Down Payment</h1>
          <h1 className="text-xl underline underline-offset-2">
            Total Down Payment - ₹ {downPayment}
          </h1>
          <input
            type="range"
            id=""
            min={0}
            max={cost}
            value={downPayment}
            onChange={updateEmi}
          />
          <div className="flex justify-between text-lg">
            <span>0%</span>
            <span>₹ {downPayment}</span>
            <span>100%</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Down Payment</h1>
          <h1 className="text-xl underline underline-offset-2">
            Total Loan Amount - ₹ {emi * 12}
          </h1>
          <input
            type="range"
            id=""
            min={calculateEmi(cost)}
            max={calculateEmi(0)}
            value={emi}
            onChange={updateDownPayment}
          />
          <div className="flex justify-between text-lg">
            <span>0%</span>
            <span>₹ {emi}</span>
            <span>100%</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Tenure</h1>
          <div className="flex justify-between">
            {arr.map((ele, idx) => (
              <button
                key={idx}
                className="w-fit px-8 py-2 rounded-3xl bg-blue-600 text-white text-lg"
                onClick={(e) => setTenure(e.target.value)}
              >
                {ele * 12}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
