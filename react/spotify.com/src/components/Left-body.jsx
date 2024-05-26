import {
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaArrowRight,
  FaSearch,
  FaHome,
  FaBook,
} from "react-icons/fa";

function Left_body() {
  return (
    <>
      <div className="left-body">
        <div className="upper-left">
          <ul className="upper-left-li">
            <li className="home">
              <FaHome className="home-svg" />
              Home
            </li>
            <li className="search">
              <FaSearch className="search-svg" />
              Search
            </li>
          </ul>
        </div>
        <div className="lower-left">
          <div className="lib-nav">
            <div className="left-lib-nav">
              <FaBook className="book-svg" />
              <h1>Your Library</h1>
            </div>
            <div className="right-lib-nav">
              <FaPlus className="plus-svg" />
              <FaArrowRight className="right-arrow-svg" />
            </div>
          </div>
          <div className="boxes">
            <div className="box1">
              <h2>Create your first playlist</h2>
              <h3>It's easy, we'll help you</h3>
              <button className="create-playlist">Open playlist</button>
            </div>
            <div className="box2">
              <h2>Let's find some podcasts to follow</h2>
              <h3>We'll keep you updated on new episodes</h3>
              <button className="browse-podcasts">Browse podcasts</button>
            </div>
          </div>
        </div>
      </div>
      <div className="res-left-body">
        <div className="res-upper-left">
          <FaHome className="res-home-svg" />
          <FaSearch className="res-search-svg" />
        </div>
        <div className="res-lower-left">
          <FaBook className="res-book-svg" />
        </div>
      </div>
    </>
  );
}

export default Left_body;
