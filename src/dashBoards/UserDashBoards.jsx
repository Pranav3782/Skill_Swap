import React, { useState } from "react";
import RequestMentorForm from "./RequestMentorForm";
import { useNavigate } from "react-router";

const UserDashBoards = () => {
  const [showMentorForm, setShowMentorForm] = useState(false);
  const navigate=useNavigate();

  function handleLogOut()
  {
    navigate("/")

  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-10">
        <div className="text-xl font-bold text-blue-600">MyLogo</div>

        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-600 cursor-pointer">Profile</li>
        </ul>

        <button className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600" onClick={handleLogOut}>
          Logout
        </button>
      </nav>

      {/* Page Content */}
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={() => setShowMentorForm(true)}
          className="w-44 h-10 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Request as mentor
        </button>
      </div>

      {/* MODAL */}
      {showMentorForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <RequestMentorForm onClose={() => setShowMentorForm(false)} />
        </div>
      )}
    </div>
  );
};

export default UserDashBoards;
