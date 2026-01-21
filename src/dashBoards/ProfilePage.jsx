import React, { useState } from "react";
import RequestMentorForm from "./RequestMentorForm";

const ProfilePage = () => {
  const [showMentorForm, setShowMentorForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Surya Pranav",
    age: 22,
    email: "suryapranav@gmail.com",
    skillsHave: ["React", "Tailwind", "Python", "UI Design"],
    skillsLearn: ["Backend", "DevOps", "System Design"],
  });

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <div className="bg-gray-50 flex justify-center pt-16 px-4 pb-10">

      {/* Profile Card */}
      <div className="bg-white p-5 rounded-xl shadow w-full max-w-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Profile</h1>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-sm text-blue-600 hover:underline"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Fields */}
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
        <div className="mt-4 flex justify-between">
          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          )}

          <button
            onClick={() => setShowMentorForm(true)}
            className="px-5 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition ml-auto"
          >
            Request as Mentor
          </button>
        </div>
      </div>

      {/* Modal */}
      {showMentorForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <RequestMentorForm onClose={() => setShowMentorForm(false)} />
        </div>
      )}
    </div>
  );
};

/* Reusable Row Layout */
const ProfileRow = ({ label, children }) => (
  <div className="flex justify-between items-start mb-3">
    <p className="text-gray-500 text-sm w-36">{label}</p>
    <div className="flex-1 text-right">{children}</div>
  </div>
);

export default ProfilePage;
