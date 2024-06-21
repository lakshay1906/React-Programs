import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CarouselSlider({ imgIndex, images }) {
  return (
    <>
      <div className="overflow-hidden relative rounded-2xl w-[350px]">
        <motion.div>
          <CarouselImage images={images} />
        </motion.div>
      </div>
    </>
  );
}

function CarouselImage({ images }) {
  return (
    <>
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="w-[350px] h-[400px] shrink-0 rounded-2xl bg-neutral-600 overflow-hidden"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={350}
            height={350}
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </>
  );
}
