import { createBrowserRouter, } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout, 
    children: [
        {
            index: true,
            Component: HomePage
        }
    ]
  }, 
  {
    path:'/',
    Component: AuthLayout,
    children: [
      {
        path:'login',
        Component: Login
      }
    ]
  }
]);