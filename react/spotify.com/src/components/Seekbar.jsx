import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  BiSolidVolumeFull,
  BiSolidVolume,
  BiSolidVolumeLow,
  BiSolidVolumeMute,
} from "react-icons/bi";
// import { playlistTracks } from "../Data/Constants";

function Seekbar() {
  const singleSong = useSelector((state) => state.singleSong);
  const playlistTracks = useSelector((state) => state.songTracks);
  const [isPlaying, setIsPlaying] = useState(true);
  const [counter, setCounter] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [mute, setMute] = useState(false);

  const audioRef = useRef(null);

  function handleSeekBar(e) {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  }

  function handleTimeUpdate() {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  }

  function handlePlayPause() {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
    setIsPlaying(!isPlaying);
  }

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  function onVolumeChange(value) {
    audioRef.current.volume = value;
    setVolume(value);
  }
  function onMute() {
    // if (mute) setVolume(0);
    // else setVolume(0.4);
    setMute(!mute);
    setVolume(0);
  }

  function calcCounter() {
    for (let i = 0; i < playlistTracks.tracks.items.length; i++) {
      const element = playlistTracks.tracks.items[i];
      if (element.track.id == singleSong.track.id) setCounter(i);
    }
  }
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  useEffect(() => {
    setIsPlaying(true);
    audioRef.current.pause();
  }, [counter]);

  useEffect(() => {
    calcCounter();
  }, [singleSong]);
  return (
    <>
      <div className="seekbar">
        <div className="song-detail">
          <div className="song-img">
            <img
              src={
                playlistTracks.tracks.items[counter].track.album.images[1].url
              }
            />
          </div>
          <div className="about-song">
            <h4 className="song-title">
              {playlistTracks.tracks.items[counter].track.name}
            </h4>
            {/* <div className="singer">
              {playlistTracks.tracks.items[counter].track.artists.map(
                (artist, artistIdx) => (
                  <span key={artist.id} id={artist.id}>
                    <NavLink>{artist.name}</NavLink>
                    {playlistTracks.tracks.items[counter].track.artists.length -
                      1 <=
                    artistIdx
                      ? ""
                      : ", "}
                  </span>
                )
              )}
            </div> */}
          </div>
        </div>
        <div className="other-detail">
          <div className="functions">
            <div className="left-function-svg">
              <div className="now-playing-view">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="Svg-sc-ytk21e-0 dYnaPI"
                >
                  <path d="M11.196 8 6 5v6l5.196-3z" fill="#a7a7a7"></path>
                  <path
                    d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"
                    fill="#a7a7a7"
                  ></path>
                </svg>
              </div>
              <div className="lyrics">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="Svg-sc-ytk21e-0 dYnaPI"
                >
                  <path
                    d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"
                    fill="#a7a7a7"
                  ></path>
                </svg>
              </div>
              <div className="queue">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="Svg-sc-ytk21e-0 dYnaPI"
                >
                  <path
                    d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"
                    fill="#a7a7a7"
                  ></path>
                </svg>
              </div>
              <div className="connect-to-device">
                <svg
                  data-encore-id="icon"
                  role="presentation"
                  aria-hidden="true"
                  className="Svg-sc-ytk21e-0 dYnaPI"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
                    fill="#a7a7a7"
                  ></path>
                  <path
                    d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                    fill="#a7a7a7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="center-function-svg">
              <div
                className="previous-song"
                onClick={() => counter > 0 && setCounter(counter - 1)}
              >
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="Svg-sc-ytk21e-0 dYnaPI"
                >
                  <path
                    d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"
                    fill="#a7a7a7"
                  ></path>
                </svg>
              </div>
              <div className="play" onClick={handlePlayPause}>
                {isPlaying ? (
                  <FaPlayCircle size="3.3rem" color="white" />
                ) : (
                  <FaPauseCircle size="3.3rem" color="white" />
                )}
              </div>
              <div
                className="forward-song"
                onClick={() =>
                  playlistTracks.tracks.items.length - 1 > counter &&
                  setCounter(counter + 1)
                }
              >
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="Svg-sc-ytk21e-0 dYnaPI"
                >
                  <path
                    d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
                    fill="#a7a7a7"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="right-function-svg">
              <div className="mute" onClick={onMute}>
                {mute ? (
                  volume === 0 ? (
                    <BiSolidVolumeMute color="#a7a7a7" size={"2rem"} />
                  ) : (
                    <BiSolidVolumeMute color="#a7a7a7" size={"2rem"} />
                  )
                ) : volume < 0.6 ? (
                  <BiSolidVolumeLow color="#a7a7a7" size={"2rem"} />
                ) : (
                  <BiSolidVolumeFull color="#a7a7a7" size={"2rem"} />
                )}
              </div>
              <input
                type="range"
                className="vol-seekbar"
                step="0.01"
                min="0"
                max="1"
                value={volume}
                onChange={(e) => {
                  onVolumeChange(e.target.value);
                  if (e.target.value === 0) setMute(true);
                }}
              />
            </div>
          </div>
          <div className="duration">
            <span className="current-time">{formatDuration(currentTime)}</span>
            {/* <span className="duration-seekbar"></span> */}
            <input
              type="range"
              min={0}
              max={29}
              value={currentTime}
              onChange={handleSeekBar}
              className="duration-seekbar"
            />
            <span className="time-left">{"00:29"}</span>
            <audio
              ref={audioRef}
              src={playlistTracks.tracks.items[counter].track.preview_url}
            ></audio>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seekbar;

/* 

#Portfolio #React #WebDev #TechSkills #Projects #CareerJourney #HireMe #Linkedin #Github #Codepen #WebDevelopment #Productivityspace #react #TechInnovation #memoization #reactJS #webDevelopment #javaScript #frontEnd #uiux #reactapp #codenewbie #techinnovation #programming #softwaredevelopment #webdev #developercommunity #digitaltransformation #techforgood #opensource #creativecoding #innovationhub #techskills #projectshowcase #learntocode

Explore my quiz application, where you can select from categories like
General Knowledge, Mathematics, Sports, Music, and History. Customize
your quiz by adjusting the number of questions (1-50) and choosing the
difficulty level (easy, medium, hard). This project showcases my ability to
create interactive, user-centric educational tools. */
