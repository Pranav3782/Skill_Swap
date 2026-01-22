import React from "react";
import Dashboard_Navbar from "../Dashboard_Navbar";

const stats = [
  { label: "Classes Taught", value: "124" },
  { label: "Overall Rating", value: "4.8 ⭐" },
  { label: "Connections", value: "56" },
  { label: "Upcoming Requests", value: "3" },
];

const requests = [
  {
    id: 1,
    name: "Rohit Sharma",
    skills: ["React", "UI Design"],
    message: "I want mentorship for frontend system design.",
    date: "Today",
  },
  {
    id: 2,
    name: "Ananya Singh",
    skills: ["Python", "ML"],
    message: "Looking for career guidance and projects help.",
    date: "Yesterday",
  },
  {
    id: 3,
    name: "Karthik R",
    skills: ["Node", "MongoDB"],
    message: "Need backend architecture mentorship.",
    date: "2 days ago",
  },
];

const MentorsPage = () => {
  return (
    <>
      <Dashboard_Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-6 py-8">
        
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Mentor Dashboard
        </h1>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        {/* ✅ Requests Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Connection Requests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-xl shadow-sm p-5 flex flex-col justify-between"
              >
                {/* User Info */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {req.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {req.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 mb-2">
                    {req.message}
                  </p>

                  <p className="text-xs text-gray-400">
                    Requested: {req.date}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    Accept
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {requests.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-10 text-center text-gray-500">
              No pending connection requests.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MentorsPage;
