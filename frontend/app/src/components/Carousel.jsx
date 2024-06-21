import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.1,
      fill: "black",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
        <div className="carousel-images">
        <div className="w-[94vw] grid justify-items-center absolute z-[2] text-[5vw] m-[4vw] mt-[15vw] text-white">
            <div className='masker'>
                <h1 className="text-white uppercase text-[4vw] tracking-tighter font-regular leading-[4vw] text-center">Comprehensive & Hands-On</h1>
            </div>
            <div className='masker'>
                <h1 className="text-white uppercase text-[4vw] tracking-tighter font-regular leading-[4vw] text-center">aeromodelling & hardware classes</h1>
            </div>
            <div className='masker'>
                <h1 className="text-white uppercase text-[4vw] tracking-tighter font-regular leading-[4vw] text-center">For all students</h1>
            </div>
            <a href="/Register"><button className="mt-[4vw] text-[1.5vw] p-[1vw] shadow-lg shadow-black rounded-[2vw] bg-sky-500">Register Now</button></a>
        </div>
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            exit="exit"
            animate="visible"
            variants={slideVariants}
          />
        </AnimatePresence>
        <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3vw"
              viewBox="0 96 960 960"
              width="3vw"
              fill="#0ea5e9"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3vw"
              viewBox="0 96 960 960"
              width="3vw"
              fill="#0ea5e9"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;