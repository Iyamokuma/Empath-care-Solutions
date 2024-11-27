import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const StickyWhatsApp = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=447919206547`; // Use the provided WhatsApp link

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default StickyWhatsApp;
