import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Public Pages
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";

// User / Mentor Dashboards
import UserDashBoards from "./dashBoards/UserDashBoards";
import ProfilePage from "./dashBoards/ProfilePage";
import MentorsPage from "./dashBoards/mentorDashboard/mentorspage";

// ✅ Admin Dashboard
import AdminLayout from "./dashBoards/adminDashboard/AdminLayout";
import AdminHome from "./dashBoards/adminDashboard/pages/AdminHome";
import Users from "./dashBoards/adminDashboard/pages/Users";
import Mentors from "./dashBoards/adminDashboard/pages/Mentors";
import MentorRequests from "./dashBoards/adminDashboard/pages/MentorRequests";
import Reports from "./dashBoards/adminDashboard/pages/Reports";
import Settings from "./dashBoards/adminDashboard/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <UserDashBoards />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/mentorsDashboard",
    element: <MentorsPage />,
  },

  // 🔥 ADMIN DASHBOARD ROUTES
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // /admin
        element: <AdminHome />,
      },
      {
        path: "users", // /admin/users
        element: <Users />,
      },
      {
        path: "mentors", // /admin/mentors
        element: <Mentors />,
      },
      {
        path: "mentor-requests", // /admin/mentor-requests
        element: <MentorRequests />,
      },
      {
        path:"reports",
        element:<Reports/>
      },
      {
        path:"settings",
        element:<Settings/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
