import { useNavigate } from "react-router-dom";

const Dashboard_Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div
        className="text-xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        MyLogo
      </div>

      <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
         <li
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          Home
        </li>
        <li
          className="hover:text-blue-600 cursor-pointer"
          onClick={()=>navigate("/mentorsDashboard")}
         
        >
          MentorDashboard
        </li>
       
        <li
          className="hover:text-blue-600 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          Profile
        </li>
      </ul>

      <button
        onClick={() => navigate("/")}
        className="px-4 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Dashboard_Navbar;
