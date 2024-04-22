import React, { useState, useEffect } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const rawData = await fetch();
    const data = await rawData.json();
    setData(data);
  }, [third]);
}

export default useCurrencyInfo;
