import React from "react";
import { motion } from "framer-motion";
import "./BooksCarousel.css";
import { data } from "../Data/BooksData";
import SingleBook from "./SingleBook";

const BooksCarousel = () => {
  const [width, setWidth] = React.useState(0);
  const carouselRef = React.useRef();

  React.useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="carousel-container">
        <div className="flex justify-between mb-5">
          <h1 className="border-2 border-orange-600 w-fit px-3 py-1 rounded-[2rem] text-lg">
            New Release & Pre-orders
          </h1>
          <button className="border-2 border-orange-600 w-fit px-3 py-1 rounded-[2rem] text-lg text-orange-600 hover:bg-orange-600 hover:text-white transition-all">
            More Products
          </button>
        </div>
        <motion.div
          ref={carouselRef}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {data.slice(0, 10).map((bookData, idx) => (
              <motion.div className="item" key={idx}>
                <SingleBook data={bookData} idxId={idx} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BooksCarousel;
