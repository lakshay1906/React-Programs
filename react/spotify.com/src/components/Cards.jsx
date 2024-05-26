import React from "react";
import { IoMdPlay } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { playlistByCategory } from "../Data/Constants";
import { useDispatch } from "react-redux";
import { setSingleSong, setSongTracks } from "../Features/ApiDataSlice";

const Card = ({ element, eleId, imgLink, cardTitle, cardDescription }) => {
  const dispatch = useDispatch();

  async function handleOnClick() {
    const rawData = await fetch(playlistByCategory(eleId));
    const data = await rawData.json();
    dispatch(setSongTracks(data));
    dispatch(setSingleSong(data.tracks.items[0]));
    console.log(data);
  }

  return (
    <NavLink to={"/songTracks"}>
      <div id={eleId} className="albumCard" onClick={handleOnClick}>
        <div className="image">
          <img src={imgLink} />
        </div>
        <h2>{cardTitle}</h2>
        <h3>{cardDescription}</h3>
        <div className="hoverPlay">
          <IoMdPlay size="2.2rem" className="playIcon" color="black" />
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
