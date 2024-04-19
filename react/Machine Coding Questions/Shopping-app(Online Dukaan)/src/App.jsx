import { useState, useEffect } from "react";
import Category_cards from "./Components/Category_cards";
import { NavLink } from "react-router-dom";

function App() {
  // console.log("Radhe Radhe");

  return (
    <>
      <div
        id="categories"
        className="flex flex-col items-center font-semibold mt-16 z-0"
      >
        <h1 className="text-[2.4rem] font-bold underline-offset-4 underline">
          Categories
        </h1>
        <div className="flex w-11/12 justify-center flex-wrap gap-x-72 gap-y-8 mt-5">
          <NavLink to={"/electronicsAndVehicles"}>
            <Category_cards
              category="Electronics and Vehicles"
              bgImg="url('/src/assets/Electro_vehicle.jpg')"
            />
          </NavLink>
          <NavLink to="/groceries">
            <Category_cards
              category="Groceries and Fragrances"
              bgImg="url('/src/assets/Groceries_perfumes.jpg')"
            />
          </NavLink>
          <NavLink to="/homeDecoration">
            <Category_cards
              category="Home Decoration and Lightings"
              bgImg="url('/src/assets/Decoration_lighting.jpg')"
            />
          </NavLink>
          <NavLink to="/skincare_Bags">
            <Category_cards
              category="Skin Care and Hand Bags"
              bgImg="url('/src/assets/Skincare_bags.jpg')"
            />
          </NavLink>
          <NavLink to="/wearables">
            <Category_cards
              category="Men and Women Wearables"
              bgImg="url('/src/assets/Wearables.jpg')"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default App;

// 1. Electronics and vehicles = Smartphones , laptops , automotives , motorcycle
// 2. Wearables = tops , womens-dresses ,womens-dresses , mens-shirts , mens-shoes , men-watches ,womens-watches , womens-jewellery ,sunglasses
// 3. home decoration =  furniture, itself , lighting
// 4. Groceries = itself, fragrances
// 5. skin care = itself, women-bags

// const [data, setData] = useState({});
//   const [showCards, setShowCards] = useState(false);
//   const [category, setCategory] = useState("lighting");

//   console.log("Radhe Radhe");
//   async function fetchData() {
//     let rawData = await fetch("https://dummyjson.com/products?limit=100");
//     let data = await rawData.json();
//     setData(data);
//     console.log(data);
//     setShowCards(true);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       {showCards && (
//         <div className="flex flex-wrap px-4 gap-x-2 gap-y-4 py-10 overflow-y-auto">
//           {data.products
//             .filter((ele) => {
//               return (
//                 ele.category === "smartphones" || ele.category === "laptops"
//               );
//             })
//             .map((ele) => {
//               // console.log(ele);
//               return (
//                 <Card
//                   keys={ele.id}
//                   imgLink={ele.thumbnail}
//                   brandName={ele.brand}
//                   productName={ele.title}
//                   desc={ele.description}
//                   price={ele.price}
//                 />
//               );
//             })}
//         </div>
//       )}
//     </>
//   );
