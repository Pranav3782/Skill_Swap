import React, { useState } from "react";
import RequestMentorForm from "./RequestMentorForm";
import { useNavigate } from "react-router";

const UserDashBoards = () => {
  const [showMentorForm, setShowMentorForm] = useState(false);
  const navigate = useNavigate();

  function handleLogOut() {
    navigate("/");
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

        <button
          className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      </nav>

      {/* ===== Card Section ===== */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Mentors Available
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* One Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                R
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Rahul Sharma
                </h3>
                <p className="text-sm text-gray-500">Frontend Developer</p>

                {/* Ratings */}
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-xs text-gray-500 ml-1">(4.0)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Skills:</span> React, JS, Tailwind
              </p>
              <p>
                <span className="font-medium">Experience:</span> 3+ years
              </p>
            </div>

            <button
              className="mt-5 w-full border border-blue-500 text-blue-500 rounded-lg py-2 hover:bg-blue-500 hover:text-white transition"
              onClick={() => setShowMentorForm(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* ===== End Card Section ===== */}

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
