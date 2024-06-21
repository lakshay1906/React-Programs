import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import { useSelector } from "react-redux";
import BooksCarousel from "./Components/BooksCarousel";
import BooksReviews from "./Components/BooksReviews";
import Footer from "./Components/Footer";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#202020] text-white" : "bg-white text-black"
      }`}
    >
      <NavBar />
      <HeroSection />
      <BooksCarousel />
      <BooksCarousel />
      <BooksReviews />
      <Footer />
    </div>
  );
}

export default App;
