import React from "react";
import { motion } from "framer-motion"; // Import framer motion
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import heroImg from "../components/assets/images/hero.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { FaHandsHelping, FaHandHoldingHeart, FaHeart, FaUsers } from "react-icons/fa";
import About1 from "./About1";
import About2 from "./About2";
import StickyWhatsApp from "./StickyWhatsApp";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About1 />
      <br />
      <StickyWhatsApp /> 
      <br />
      <About2 />
      <br />
    </>
  );
};

export const HomeContent = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleGetStartedClick = () => {
    navigate("/contact"); // Navigate to the contact page on click
  };

  return (
    <motion.section
      className="bg-[#B8DDE3] py-10 h-[100vh] sm:h-[80vh] md:h-full" // Adjust height for small screens
      initial={{ opacity: 0 }} // Initial opacity for fade-in
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 1 }} // Duration of animation
    >
      <div className="container">
        <div className="flex items-center justify-center md:flex-col">
          <div className="left w-1/2 text-black md:w-full">
            <motion.h1
              className="text-4xl leading-tight text-black-400 font-semibold"
              initial={{ x: -100, opacity: 0 }} // Starting position
              animate={{ x: 0, opacity: 1 }} // End position
              transition={{ duration: 0.8 }} // Animation duration
            >
              <br /> Compassionate Care <br /> for a Healthier Tomorrow
            </motion.h1>

            <div className="relative text-gray-600 focus-within:text-gray-400 mt-5 normal-case">
            <span className="text-14px">You are guaranteed to find the right care for you</span>
           </div>

            <div className="mt-4">
              <motion.button
                className="bg-[#5CE1E6] text-black py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={handleGetStartedClick} // Call navigation on button click
              >
                Get Started
              </motion.button>
            </div>
          </div>

          <div className="right w-1/2 md:w-full relative">
            <motion.div
              className="images relative h-[95vh] sm:h-[70vh] w-full -mt-8" // Adjust height for the image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={heroImgback}
                alt=""
                className="absolute h-full w-full object-contain z-10"
              />
              <div className="img h-full w-full">
                <img
                  src={heroImg}
                  alt=""
                  className="h-full w-full object-contain z-20 relative"
                />
              </div>
            </motion.div>

            <div className="content">
            <motion.button
  className="bg-white shadow-md absolute top-56 left-0 z-30 p-2 flex items-center rounded-md sm:top-50 mt-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 1 }}
>
  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-[#5CE1E6]">
    <FaHandsHelping size={25} />
  </div>
  <div className="text flex flex-col items-start px-4">
    <span className="text-sm text-black">High Quality Care</span>
  </div>
</motion.button>

              <motion.button
                className="bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md pr-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-[#5CE1E6]">
                  <FaHeart size={25} />
                </div>
                <div className="text flex flex-col items-start px-4">
                  <span className="text-sm text-black">Responsive Care</span>
                </div>
              </motion.button>
              <motion.button
                className="bg-white shadow-md absolute top-72 -right-32 z-30 p-2 md:top-[30rem] md:-right-5 flex items-center rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-[#5CE1E6]">
                  <FaUsers size={25} />
                </div>
                <div className="text flex flex-col items-start px-4">
                  <span className="text-sm text-black">
                    Professional Team <br /> of Care-Givers
                  </span>
                </div>
              </motion.button>
              <motion.button
                className="bg-white shadow-md absolute top-32 right-32 z-30 p-2 flex items-center rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-[#5CE1E6]">
                  <FaHandHoldingHeart size={25} />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
