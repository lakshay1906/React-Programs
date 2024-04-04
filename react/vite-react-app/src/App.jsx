// import { useState } from 'react'
import React from "react";
import "./App.css";
import Heading from "./bharat_clock_components/heading";
import Para from "./bharat_clock_components/text_in_clock";
import ClockCurrent from "./bharat_clock_components/clock";
import Heading_Food from "./healthy_foods_components/heading";
import Item_list from "./healthy_foods_components/list";

function App() {
  console.log(import.meta.env.VITE_REACT_APP_SECRET_KEY);
  return (
    <>
      {/* The above empty tag is just a fragment to enlcose the whole code into a single tag. We are doing so because react doesn't allow us to return multiple tags.
    We can also use  <></>  OR  <React.Fragment></React.Fragment> means of both the tag is same but <React.Fragment></React.Fragment> will only work if we have imported React in our file.
    */}
      {/* <Heading className="heading"/>
      <Para/>
      <ClockCurrent></ClockCurrent> */}
    </>
  );

  // return(
  //   <>
  //   <Heading_Food/>
  //   <Item_list/>
  //   </>
  // )
}

export default App;
