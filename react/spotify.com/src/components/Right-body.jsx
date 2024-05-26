import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { setNavHeading } from "../Features/ApiDataSlice";

function Right_body() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollValue, setScrollValue] = useState(0);
  const rightBodyRef = useRef(null);
  const dispatch = useDispatch();

  setInterval(() => {
    setScrollValue(rightBodyRef.current.scrollTop);
    if (rightBodyRef.current.scrollTop > 50) dispatch(setNavHeading(true));
    else dispatch(setNavHeading(false));
  }, 100);

  return (
    <>
      <div ref={rightBodyRef} className="right-body">
        <Navbar scrollRef={scrollValue} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Right_body;
