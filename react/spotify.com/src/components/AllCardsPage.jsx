import React from "react";
import { useSelector } from "react-redux";
import Card from "./Cards";

function AllCardsPage() {
  const allCardsData = useSelector((state) => state.allCardsData);
  console.log(allCardsData);
  if (allCardsData.hasOwnProperty("message"))
    console.log(allCardsData.playlists.items);
  else if (allCardsData.hasOwnProperty("albums"))
    console.log(allCardsData.albums.items);
  else if (allCardsData.hasOwnProperty("categories"))
    console.log(allCardsData.categories.items);

  return (
    <>
      <div className="allCardsPage-container">
        {allCardsData.hasOwnProperty("message") && (
          <div className="allCardsPage">
            <div className="heading-container">
              <h1>Popular Playlists</h1>
            </div>
            <div className="allCards">
              {allCardsData.hasOwnProperty("message") &&
                allCardsData.playlists.items.map((ele) => (
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
        {allCardsData.hasOwnProperty("albums") && (
          <div className="allCardsPage">
            <div className="heading-container">
              <h1>New Release</h1>
            </div>
            <div className="allCards">
              {allCardsData.hasOwnProperty("albums") &&
                allCardsData.albums.items.map((ele) => (
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
        {allCardsData.hasOwnProperty("categories") && (
          <div className="allCardsPage">
            <div className="heading-container">
              <h1>Categories</h1>
            </div>
            <div className="allCards">
              {allCardsData.hasOwnProperty("categories") &&
                allCardsData.categories.items.map((ele) => (
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
        )}
      </div>
    </>
  );
}

export default AllCardsPage;
