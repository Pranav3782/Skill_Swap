import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashBoards from "./dashBoards/UserDashBoards";
import ProfilePage from "./dashBoards/ProfilePage";
import MentorsPage from "./dashBoards/mentorDashboard/mentorspage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Landing page / Home
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
    path:"/mentorsDashboard",
    element:<MentorsPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
