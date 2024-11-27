import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About2 = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animation duration and trigger only once
  }, []);

  return (
    <div className="p-8 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Heading */}
      <h1
        className="text-4xl font-bold text-center mb-6"
        data-aos="fade-down"
      >
        A Complete{" "}
        <span className="text-[#5CE1E6] underline underline-offset-4 decoration-1 font-light">
          Care Solution
        </span>{" "}
        For Everyone
      </h1>

      {/* First Image and Content */}
      <div
        className="flex flex-col lg:flex-row items-center gap-8 mb-12"
        data-aos="fade-right"
      >
        {/* Image */}
        <img
          src="https://media.istockphoto.com/id/1719538017/photo/home-care-healthcare-professional-hugging-senior-patient.jpg?s=612x612&w=0&k=20&c=DTQwVD1DTH0CMQ78aox8-cVKg8Nl-wCkSwY-S072M4E="
          alt="Our Story"
          className="w-full max-w-sm rounded-lg shadow-md"
        />

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="text-lg leading-relaxed">
            EmpathCare Solution is a quality-driven care provider dedicated to delivering exceptional health and social care services
            tailored to each individual's unique needs.
          </p>
        </div>
      </div>

      {/* Second Image and Content */}
      <div
        className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-12"
        data-aos="fade-left"
      >
        {/* Image */}
        <img
          src="https://media.istockphoto.com/id/2151920853/photo/senior-woman-holding-caregivers-hands-at-home.jpg?s=612x612&w=0&k=20&c=G_0uBx1_4A3iP_onJI93Cf8HfY3mQ3GDWY-PZuzFwSg="
          alt="Our Commitment"
          className="w-full max-w-sm rounded-lg shadow-md"
        />

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="text-lg leading-relaxed">
            Choose EmpathCare Solutions for a care provider that not only meets but exceeds standards in quality, empathy, and excellence.
            We are here to make a difference.
          </p>
        </div>
      </div>

      {/* Glassmorphic Cards Section */}
      <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {/* Card 1 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg">
          <h3 className="text-1xl font-semibold mb-2 text-[#5CE1E6]">Personalized Care</h3>
          <p className="text-sm">
            Receive tailored care plans designed to address your unique needs and improve your quality of life.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg">
          <h3 className="text-1xl font-semibold mb-2 text-[#5CE1E6]">24/7 Support</h3>
          <p className="text-sm">
            We are available around the clock to ensure you receive assistance whenever you need it.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg">
          <h3 className="text-1xl font-semibold mb-2 text-[#5CE1E6]">Trusted Professionals</h3>
          <p className="text-sm">
            Our experienced and compassionate team is dedicated to providing top-quality care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
