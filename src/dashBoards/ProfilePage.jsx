import React, { useState, useRef } from "react";
import RequestMentorForm from "./RequestMentorForm";
import Dashboard_Navbar from "./Dashboard_Navbar";

const ProfilePage = () => {
  const [showMentorForm, setShowMentorForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const fileInputRef = useRef(null);

  const [user, setUser] = useState({
    name: "Surya Pranav",
    age: 22,
    email: "suryapranav@gmail.com",
    photo:
      "https://api.dicebear.com/7.x/initials/svg?seed=Surya", // default avatar
    skillsHave: ["React", "Tailwind", "Python", "UI Design"],
    skillsLearn: ["Backend", "DevOps", "System Design"],
  });

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    handleChange("photo", imageUrl);
  };

  return (
    <>
      <Dashboard_Navbar />

      <div className="bg-gray-50 flex justify-center px-4 py-10">
        <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Your Profile</h1>

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95
                ${
                  isEditing
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                }
              `}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* ✅ Profile Photo */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={user.photo}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow"
              />

              {isEditing && (
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-1 right-1 bg-blue-600 text-white 
           w-9 h-9 flex items-center justify-center 
           text-lg font-bold rounded-full shadow-lg 
           hover:bg-blue-700 active:scale-95 transition"

                >
                  +
                </button>
              )}
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handlePhotoUpload}
            />
          </div>

          {/* Name */}
          <ProfileRow label="Name">
            {isEditing ? (
              <input
                value={user.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="input"
              />
            ) : (
              <span className="value">{user.name}</span>
            )}
          </ProfileRow>

          {/* Age */}
          <ProfileRow label="Age">
            {isEditing ? (
              <input
                type="number"
                value={user.age}
                onChange={(e) => handleChange("age", e.target.value)}
                className="input w-24"
              />
            ) : (
              <span className="value">{user.age}</span>
            )}
          </ProfileRow>

          {/* Email */}
          <ProfileRow label="Email">
            {isEditing ? (
              <input
                value={user.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="input"
              />
            ) : (
              <span className="value">{user.email}</span>
            )}
          </ProfileRow>

          {/* Skills You Have */}
          <ProfileRow label="Skills You Have">
            {isEditing ? (
              <input
                value={user.skillsHave.join(", ")}
                onChange={(e) =>
                  handleChange(
                    "skillsHave",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
                className="input"
              />
            ) : (
              <div className="flex flex-wrap gap-2 justify-end">
                {user.skillsHave.map((skill, i) => (
                  <span key={i} className="chip blue">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </ProfileRow>

          {/* Skills To Learn */}
          <ProfileRow label="Skills To Learn">
            {isEditing ? (
              <input
                value={user.skillsLearn.join(", ")}
                onChange={(e) =>
                  handleChange(
                    "skillsLearn",
                    e.target.value.split(",").map((s) => s.trim())
                  )
                }
                className="input"
              />
            ) : (
              <div className="flex flex-wrap gap-2 justify-end">
                {user.skillsLearn.map((skill, i) => (
                  <span key={i} className="chip green">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </ProfileRow>

          {/* Actions */}
          <div className="mt-6 flex justify-between">
            {isEditing && (
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition active:scale-95"
              >
                Save Changes
              </button>
            )}

            <button
              onClick={() => setShowMentorForm(true)}
              className="ml-auto px-5 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition active:scale-95"
            >
              Request as Mentor
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showMentorForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <RequestMentorForm onClose={() => setShowMentorForm(false)} />
        </div>
      )}
    </>
  );
};

/* Reusable Row */
const ProfileRow = ({ label, children }) => (
  <div className="flex justify-between items-start mb-4">
    <p className="text-gray-500 text-sm w-36">{label}</p>
    <div className="flex-1 text-right">{children}</div>
  </div>
);

export default ProfilePage;
