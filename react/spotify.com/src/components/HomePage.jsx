import React from "react";
import Card from "./Cards";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllCardsData } from "../Features/ApiDataSlice";
import { IoMdHand } from "react-icons/io";

function HomePage() {
  const featured = useSelector((state) => state.featured);
  const categories = useSelector((state) => state.categories);
  const newRelease = useSelector((state) => state.newRelease);
  const dispatch = useDispatch();

  function handleShowCards(e) {
    console.log(e.target.id);
    if (e.target.id === "featured") dispatch(setAllCardsData(featured));
    if (e.target.id === "newRelease") dispatch(setAllCardsData(newRelease));
    if (e.target.id === "categories") dispatch(setAllCardsData(categories));
  }

  return (
    <div className="all-tracks">
      {featured.hasOwnProperty("message") && (
        <div className="albums-container">
          <div className="heading-container">
            <h1>{featured.message}</h1>
            {/* <NavLink to={"/allCards"}>
              <p id="featured" className="show-all" onClick={handleShowCards}>
                Show all
              </p>
            </NavLink> */}
          </div>
          <div className="albums">
            {featured.playlists.items.map((ele) => (
              <Card
                key={ele.id}
                element={ele}
                eleId={ele.id}
                imgLink={ele.images[0].url}
                cardTitle={ele.name}
                cardDescription={
                  ele.description.length > 78
                    ? ele.description.slice(0, 75) + "...."
                    : ele.description
                }
              />
            ))}
          </div>
        </div>
      )}

      {/* {newRelease.hasOwnProperty("albums") && (
        <div className="albums-container">
          <div className="heading-container">
            <h1>New Release</h1>
            <NavLink to={"/allCards"}>
              <p id="newRelease" className="show-all" onClick={handleShowCards}>
                Show all
              </p>
            </NavLink>
          </div>
          <div className="albums">
            {newRelease.albums.items.slice(0, 5).map((ele) => (
              <Card
                key={ele.id}
                element={ele}
                eleId={ele.id}
                imgLink={ele.images[0].url}
                cardTitle={ele.name}
                cardDescription={ele.release_date}
              />
            ))}
          </div>
        </div>
      )}

      {categories.hasOwnProperty("categories") && (
        <div className="albums-container">
          <div className="heading-container">
            <h1>Categories</h1>
            <NavLink to={"/allCards"}>
              <p id="categories" className="show-all" onClick={handleShowCards}>
                Show all
              </p>
            </NavLink>
          </div>
          <div className="albums">
            {categories.categories.items.slice(0, 5).map((ele) => (
              <Card
                key={ele.id}
                element={ele}
                eleId={ele.id}
                imgLink={ele.icons[0].url}
                cardTitle={ele.name}
              />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}

export default HomePage;
