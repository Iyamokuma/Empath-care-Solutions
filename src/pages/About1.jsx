import React from "react";
import { motion } from "framer-motion"; // Import framer motion
import { useNavigate } from "react-router-dom"; // Import the navigate hook

const About1 = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleGetStartedClick = () => {
    navigate("/contact"); // Navigate to the contact page on click
  };

  return (
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="heading py-12 text-center w-2/3 mx-auto md:w-full">
        <h1 className="text-3xl font-semibold text-black">
          EMPATH CARE{" "}
          <span className="text-[#5CE1E6] underline underline-offset-4 decoration-1 under font-light">
            Services
          </span>
        </h1>
        <span className="text-[14px] mt-2 block">
          We offer Tailored Care Services to Support Every Step of Your Journey.
        </span>
      </div>

      {/* Content */}
      <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
        {/* First Image Section */}
        <div className="images rounded-lg relative overflow-hidden h-72 w-full">
          <img
            src="https://img.freepik.com/free-photo/male-social-worker-taking-care-old-woman_23-2149031314.jpg?ga=GA1.1.765503065.1730222832&semt=ais_hybrid"
            alt="Mostly Online Learning"
            className="rounded-t-lg object-cover w-full h-72"
          />
          <div className="categ flex flex-col gap-4 absolute top-0 left-0 w-full h-full z-10 items-center justify-center text-center bg-black bg-opacity-50">
            <h2 className="text-2xl text-[#5CE1E6] font-semibold">Domiciliary Care</h2> 
            <motion.button
              className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white hover:bg-white hover:text-black transition"
              aria-label="Send a request for Home Care"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              onClick={handleGetStartedClick} // Apply navigation
            >
              Send A Request
            </motion.button>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="images rounded-lg relative overflow-hidden h-72 w-full">
          <img
            src="https://img.freepik.com/premium-photo/senior-care-nurse-old-woman-with-wheelchair-portrait-smile-health-nursing-home-support-kindness-happy-face-caregiver-with-elderly-person-with-disability-homecare-service_590464-252042.jpg?ga=GA1.1.765503065.1730222832&semt=ais_hybrid"
            alt="Mostly Online Learning"
            className="rounded-t-lg object-cover w-full h-72"
          />
          <div className="categ flex flex-col gap-4 absolute top-0 left-0 w-full h-full z-10 items-center justify-center text-center bg-black bg-opacity-50">
            <h2 className="text-2xl text-[#5CE1E6] font-semibold">Live in Care</h2>
            <motion.button
              className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white hover:bg-white hover:text-black transition"
              aria-label="Send a request for Live in Care"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              onClick={handleGetStartedClick} // Apply navigation
            >
              Send A Request
            </motion.button>
          </div>
        </div>

        {/* Third Image Section */}
        <div className="images rounded-lg relative overflow-hidden h-72 w-full">
          <img
            src="https://img.freepik.com/premium-photo/nurse-helping-senior-woman-with-diabetes_107420-41963.jpg?ga=GA1.1.765503065.1730222832&semt=ais_hybrid"
            alt="Mostly Online Learning"
            className="rounded-t-lg object-cover w-full h-72"
          />
          <div className="categ flex flex-col gap-4 absolute top-0 left-0 w-full h-full z-10 items-center justify-center text-center bg-black bg-opacity-50">
            <h2 className="text-2xl text-[#5CE1E6] font-semibold">
              Hospital Discharge Support
            </h2>
            <motion.button
              className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white hover:bg-white hover:text-black transition"
              aria-label="Send a request for Hospital Discharge Support"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              onClick={handleGetStartedClick} // Apply navigation
            >
              Send A Request
            </motion.button>
          </div>
        </div>

        {/* Fourth Image Section */}
        <div className="images rounded-lg relative overflow-hidden h-72 w-full">
          <img
            src="https://img.freepik.com/premium-photo/nursing-home-manicure-caregiver-with-senior-woman-grooming-beauty-treatment-happy-spa-african-nurse-with-nail-polish-patient-house-painting-nails-together_590464-221754.jpg?ga=GA1.1.765503065.1730222832&semt=ais_hybrid"
            alt="Become an Instructor"
            className="rounded-t-lg object-cover w-full h-72"
          />
          <div className="categ flex flex-col gap-4 absolute top-0 left-0 w-full h-full z-10 items-center justify-center text-center bg-black bg-opacity-50">
            <h2 className="text-2xl text-[#5CE1E6] font-semibold">
              Supported Living
            </h2>
            <motion.button
              className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white hover:bg-white hover:text-black transition"
              aria-label="Send a request for Supported Living Care"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              onClick={handleGetStartedClick} // Apply navigation
            >
              Send A Request
            </motion.button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      {/* If you have a form toggle condition, add it here */}
    </div>
  );
};

export default About1;
