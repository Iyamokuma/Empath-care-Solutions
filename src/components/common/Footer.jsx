import React from "react";
import logImg from "../assets/images/logo-black.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#121212] text-white pt-16 pb-10 rounded-t-[50px] md:rounded-t-[30px]">
        <div className="container mx-auto px-8 grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
          {/* Logo and Description */}
          <div className="logo">
            <img src={logImg} alt="logImg" className="h-12 mb-4" />
            <p className="text-sm">
              Get the best Care, tailored to solve all your needs.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <NavLink to="#" className="text-sm block mb-2">
              About Us
            </NavLink>
            <NavLink to="#" className="text-sm block mb-2">
              Our Services
            </NavLink>
            <NavLink to="#" className="text-sm block mb-2">
              Blog
            </NavLink>
            <NavLink to="#" className="text-sm block mb-2">
              Contact Us
            </NavLink>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <NavLink to="#" className="text-sm block mb-2">
              Social Media
            </NavLink>
            <NavLink to="#" className="text-sm block mb-2">
              Info
            </NavLink>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-[#1e1e1e] text-white outline-none"
              />
              <button className="px-4 py-2 bg-[#5CE1E6] rounded text-black font-semibold hover:bg-white hover:text-black">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Social Media and Contact Info */}
        <div className="container mx-auto px-8 flex flex-col items-center gap-4">
          {/* Social Media Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://facebook.com/empathcaresolutions.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#5CE1E6]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/EmpathcareS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#5CE1E6]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://tiktok.com/@empathcaresolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#5CE1E6]"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com/empathcaresolutions.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#5CE1E6]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#5CE1E6]"
            >
              <FaLinkedinIn />
            </a>
            
            <a
              href="https://youtube.com/@EmpathcareSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:text-[#5CE1E6]"
            >
              <FaYoutube />
            </a>
            
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <p className="text-sm">
              Address: Office 7259 321-323, High Road, Chadwell Heath, Essex RM6 6AX, United Kingdom.
            </p>
            <p className="text-sm">Contact: +44 (126)8856309</p> 
            <p className="text-sm">Email: info@empathcare.co.uk</p> 
          </div>
        </div>

        {/* Developed By Section */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Developed by <span className="text-[#5CE1E6] font-semibold">TimzDigital</span>
          </p>
        </div>
      </footer>
    </>
  );
};
