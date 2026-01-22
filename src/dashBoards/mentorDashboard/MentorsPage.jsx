import React from "react";
import Dashboard_Navbar from "../Dashboard_Navbar";

const MentorsPage = () => {
  return (
    <>
      {/* Navbar */}
      <Dashboard_Navbar />

      {/* Page Content */}
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Mentors Page
          </h1>

          <p className="text-gray-500 text-sm">
            🚧 This section is under development.
            <br />
            Please wait for future updates.
          </p>
        </div>
      </div>
    </>
  );
};

export default MentorsPage;
