import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setSingleSong } from "../Features/ApiDataSlice";
import { IoPlay } from "react-icons/io5";
import { playlistTracks } from "../Data/Constants";
import { NavLink } from "react-router-dom";

function SongsTrack() {
  const dispatch = useDispatch();
  const songTracks = useSelector((state) => state.songTracks);
  const [innerWidth, setInnerWidth] = useState(0);
  // if (songTracks.hasOwnProperty("description")) console.log(songTracks);
  // console.log(playlistTracks);
  // const songTracks = playlistTracks;

  function handleOnSongClick(ele) {
    dispatch(setSingleSong(ele));
  }

  const handleResize = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {songTracks.hasOwnProperty("description") && (
        <div className="songTracksPage">
          <div className="playlistInfo">
            <div className="playlistImg">
              <img src={songTracks.images[0].url} alt={songTracks.name} />
            </div>
            <div className="playlistDescription">
              <h1>{songTracks.name}</h1>
              <p>{songTracks.description}</p>
              <div className="likes">
                <div className="spotify">
                  <FaSpotify color="#1fdf64" size="2.4rem" />
                  <span>Spotify</span>
                </div>
                <LuDot color="#9d9d9d" size="2.5rem" />
                <span>{songTracks.followers.total} likes</span>
                <LuDot color="#9d9d9d" size="2.5rem" />
                <span>{songTracks.tracks.items.length} songs</span>
              </div>
            </div>
          </div>
          <div className="songs">
            <div className="all-song-title-bar song-title-bar">
              <span className="hash">
                <p>#</p>
              </span>
              <span className="">Title</span>
              <span className="res-track">Album</span>
              <span className="res-track">Date added</span>
              <span className="res-track">
                <LuClock3 />
              </span>
            </div>
            <div className="song-title-seperator"></div>

            {songTracks.tracks.items.map((ele, idx) => (
              <>
                <div
                  key={ele.track.album.id}
                  className="song-title-bar  song-title-bar-hover"
                  onClick={() => handleOnSongClick(ele)}
                >
                  <span className="track-serial-no">
                    {idx + 1}
                    {/* <IoPlay /> */}
                  </span>
                  <span className="song-img-title">
                    <div className="track-img">
                      <img src={ele.track.album.images[0].url} />
                    </div>
                    <div className="track-title">
                      {innerWidth < 768 ? (
                        <p>{ele.track.name}</p>
                      ) : (
                        <p>
                          {ele.track.name.length > 38
                            ? ele.track.name.slice(0, 38) + "..."
                            : ele.track.name}
                        </p>
                      )}
                      {/* <p>
                        {ele.track.name.length > 38
                          ? ele.track.name.slice(0, 38) + "..."
                          : ele.track.name}
                      </p> */}
                      <div>
                        {ele.track.album.artists.map((artist, artistIdx) => (
                          <span key={artist.id} id={artist.id}>
                            <NavLink>{artist.name}</NavLink>
                            {ele.track.album.artists.length - 1 <= artistIdx
                              ? ""
                              : ", "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </span>
                  <span className="track-album res-track">
                    <NavLink>{ele.track.album.name}</NavLink>
                  </span>
                  <span className="data-added res-track">
                    <p>1 Week ago</p>
                  </span>
                  <span className="song-duration res-track">
                    <p>00:29</p>
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SongsTrack;
