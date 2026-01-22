import React, { useState } from "react";
import RequestMentorForm from "./RequestMentorForm";
import { useNavigate } from "react-router";
import Dashboard_Navbar from "./Dashboard_Navbar";

const mentors = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    rating: 4.0,
    skills: ["React", "JavaScript", "Tailwind"],
    experience: "3+ years",
    bio: "Frontend specialist with experience building scalable SaaS products and design systems.",
    availability: "Weekends",
  },
];

const UserDashBoards = () => {
  const [showMentorForm, setShowMentorForm] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const navigate = useNavigate();

  function openProfilePage() {
    navigate("/profile");
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Dashboard_Navbar />

      {/* ===== Card Section ===== */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">
          Mentors Available
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {mentor.name[0]}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-500">{mentor.role}</p>

                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="text-xs text-gray-500 ml-1">
                      ({mentor.rating})
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-medium">Skills:</span>{" "}
                  {mentor.skills.join(", ")}
                </p>
                <p>
                  <span className="font-medium">Experience:</span>{" "}
                  {mentor.experience}
                </p>
              </div>

              <button
                className="mt-5 w-full border border-blue-500 text-blue-500 rounded-lg py-2 hover:bg-blue-500 hover:text-white transition"
                onClick={() => setSelectedMentor(mentor)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Mentor Details Modal ===== */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">

            {/* ❌ Close Button */}
            <button
              onClick={() => setSelectedMentor(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full 
                         flex items-center justify-center 
                         text-gray-500 hover:text-gray-800 
                         hover:bg-gray-100 transition 
                         text-lg font-semibold"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                {selectedMentor.name[0]}
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  {selectedMentor.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedMentor.role}
                </p>
                <p className="text-sm text-yellow-500">
                  ⭐ {selectedMentor.rating} Rating
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">Skills:</span>{" "}
                {selectedMentor.skills.join(", ")}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {selectedMentor.experience}
              </p>
              <p>
                <span className="font-medium">Availability:</span>{" "}
                {selectedMentor.availability}
              </p>
              <p>
                <span className="font-medium">About:</span>{" "}
                {selectedMentor.bio}
              </p>
            </div>

            {/* ✅ Send Connection Button */}
            <div className="mt-6">
              <button
                onClick={() => {
                  setShowMentorForm(true);
                  setSelectedMentor(null);
                }}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg 
                           hover:bg-blue-700 transition font-medium"
              >
               Connection Request
              </button>
            </div>

          </div>
        </div>
      )}

     
    </div>
  );
};

export default UserDashBoards;
