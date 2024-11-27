import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          We Are Not Hiring At The Moment
        </h1>
        <p className="text-gray-600 mb-4">
          But exciting opportunities are on the horizon from{" "}
          <span className="font-semibold">February 2025</span>.
        </p>
        <p className="text-gray-600 mb-6">
          Check back in February 2025 or sign up for job alerts to be the first
          to know about available positions.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Send us a Request
        </Link>
      </div>
    </div>
  );
};
