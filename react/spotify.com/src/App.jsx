import React, { useEffect } from "react";
import "./App.css";
import Left_body from "./components/Left-body";
import Right_body from "./components/Right-body";
import Seekbar from "./components/Seekbar";
import {
  browseCategories,
  categoriesData,
  featured,
  featuredData,
  newRelease,
  newReleaseData,
  songsByPlaylist,
} from "./Data/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewRelease,
  setCategories,
  setFeatured,
} from "./Features/ApiDataSlice";
import StartingSeekBar from "./components/StartingSeekbar";

function App() {
  const songTracks = useSelector((state) => state.songTracks);
  const singleSong = useSelector((state) => state.singleSong);
  const dispatch = useDispatch();
  async function fetchPlaylist() {
    // const rawData = await fetch(featured);
    // const data = await rawData.json();
    const data = featuredData;
    console.log(data);
    dispatch(setFeatured(data));
  }
  async function fetchCategories() {
    // const rawData = await fetch(browseCategories);
    // const data = await rawData.json();
    const data = categoriesData;
    console.log(data);
    dispatch(setCategories(data));
  }
  async function fetchNewRelease() {
    // const rawData = await fetch(newRelease);
    // const data = await rawData.json();
    const data = newReleaseData;
    console.log(data);
    dispatch(setNewRelease(data));
  }

  useEffect(() => {
    fetchPlaylist();
    fetchCategories();
    fetchNewRelease();
  }, []);

  return (
    <>
      <div className="body-container">
        <Left_body />
        <Right_body />
        {songTracks.hasOwnProperty("description") &&
        singleSong.hasOwnProperty("track") ? (
          <Seekbar />
        ) : (
          <StartingSeekBar />
        )}
      </div>
    </>
  );
}

export default App;
