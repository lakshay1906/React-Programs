import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar({ scrollRef }) {
  const navigate = useNavigate();
  const songTracks = useSelector((state) => state.songTracks);
  const navHeading = useSelector((state) => state.navHeading);
  const [navBg, setNavBg] = useState("");

  function handleScroll() {
    if (scrollRef > 0) setNavBg("nav-bg-color");
    else setNavBg("");
  }
  useEffect(() => {
    handleScroll();
  }, [scrollRef]);

  return (
    <>
      <nav className={navBg}>
        <div id="main">
          <div className="angle-left" onClick={() => navigate(-1)}>
            <FaChevronLeft />
          </div>
          <div className="angle-right" onClick={() => navigate(1)}>
            <FaChevronRight />
          </div>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="searching-box"
          />
          {songTracks.hasOwnProperty("description") && navHeading && (
            <h1>{songTracks.name}</h1>
          )}
        </div>
        <div className="right-nav">
          <div className="explore-premium">Explore Premium</div>
          <div className="install-app">
            <i className="fa-regular fa-circle-down download-svg"></i>Install
            App
          </div>
          <div className="whats-new">
            <FaBell />
          </div>
          <div className="account-info">L</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
