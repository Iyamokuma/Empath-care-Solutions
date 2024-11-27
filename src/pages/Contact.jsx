import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  // Scroll to top on component load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_4gadlom', // Replace with your EmailJS Service ID
        'template_rln7jnd', // Replace with your EmailJS Template ID
        templateParams,
        '9UV7S4n26vDu826Ne' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setIsSending(false);
          setFormData({ name: '', email: '', message: '' }); // Reset the form
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact EmpathCare</h2>
        <p className="text-center text-gray-500 mb-6">
          We’d love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-4 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 px-6 ${
              isSending ? 'bg-gray-400' : 'bg-blue-600'
            } text-white font-medium rounded-lg shadow-md ${
              isSending ? '' : 'hover:bg-blue-700'
            } transition duration-300 ease-in-out focus:outline-none`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};
