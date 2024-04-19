import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function ImageCarousel({ data, load }) {
  const [slide, setSlide] = useState(0);

  function onPreviousClick() {
    if (slide !== 0) setSlide(slide - 1);
    else setSlide(data.images.length - 1);
  }

  function onNextClick() {
    if (slide !== data.images.length - 1) setSlide(slide + 1);
    else setSlide(0);
  }

  return (
    load && (
      <div className="w-full h-full flex items-center justify-center relative">
        <div
          className="bg-black w-fit h-fit absolute left-2 p-[0.188rem] rounded-full "
          onClick={onPreviousClick}
        >
          <FaArrowCircleLeft
            className=" backdrop:drop-shadow-2xl hover:cursor-pointer  text-white rounded-full"
            size="1.5rem"
          />
        </div>
        {data.images.map((ele, idx) => {
          return (
            <img
              src={ele}
              key={idx}
              className={
                slide === idx ? "aspect-[1.1] object-contain" : "hidden"
              }
            />
          );
        })}
        <div className="absolute right-2 bg-black rounded-full p-[0.188rem]">
          <FaArrowCircleRight
            className=" backdrop:drop-shadow-2xl cursor-pointer  text-white rounded-full"
            size="1.5rem"
            onClick={onNextClick}
          />
        </div>
        <span className="flex items-center bg-[#505050] absolute bottom-3 gap-x-2 py-1 px-2 rounded-lg">
          {data.images.map((_, idx) => (
            <button
              key={idx}
              className={
                slide === idx
                  ? "bg-black w-2 h-2 rounded-full shadow-normalShadow "
                  : "bg-gray-200 w-2 h-2 rounded-full shadow-normalShadow "
              }
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    )
  );
}

export default ImageCarousel;
