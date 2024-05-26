import { useEffect, useState } from "react";

function App() {
  async function fetchData() {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "get",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const rawData = await fetch(
        "https://v1.nocodeapi.com/lakshay1906/yt/qYbcNJVKqANRnKzR/channels",
        requestOptions
      );
      const data = await rawData.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>Radhe Radhe</div>
    </>
  );
}

export default App;
