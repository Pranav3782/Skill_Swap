import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; 
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashBoards from "./dashBoards/UserDashBoards";
import ProfilePage from "./dashBoards/ProfilePage";

 const router=createBrowserRouter([
    {
      path:"/",
      element:<App/>
      
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/userDashboard",
      element:<UserDashBoards/>
    },
    {
      path:"/profile",
      element:<ProfilePage/>
    }

  ])
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
 
);
