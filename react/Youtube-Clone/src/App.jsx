import { useEffect, useState } from "react";
import Carousel from "./Components/Carousel";

function App() {
  // async function fetchData() {
  //   let myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   const requestOptions = {
  //     method: "get",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   try {
  //     const rawData = await fetch(
  //       "https://v1.nocodeapi.com/lakshay1906/yt/qYbcNJVKqANRnKzR/channels",
  //       requestOptions
  //     );
  //     const data = await rawData.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const slides = [
    <div onClick={(e) => console.log(1)}>
      <img alt="img1" src="../../react/padhega-India/src/assets/Pic-1.png" />
    </div>,
    <div onClick={(e) => console.log(2)}>
      <img
        alt="img2"
        src="../react/padhega-India/src/assets/Refer-a-friend.png"
      />
    </div>,
    <div onClick={(e) => console.log(3)}>
      <img
        alt="img3"
        src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
      />
    </div>,
  ];

  return (
    <>
      <div className="App">
        <Carousel
          slides={slides}
          animationType="FADE"
          animationDuration={1000}
          duration={5000}
          animationTimingFunction="linear"
          withNavigation
        />
        {/* <Carousel
          slides={slides}
          animationType="SLIDE"
          duration={2500}
          withNavigation
        /> */}
        {/* <Carousel slides={slides} animationType="ZOOM" duration={3000} /> */}
        {/* <Carousel slides={slides} duration={2500} withNavigation /> */}
      </div>
    </>
  );
}

export default App;
