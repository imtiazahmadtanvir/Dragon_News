import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import NewsDetails from "../pages/NewsDetails";

const router= createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
          {
            path: "",
            element: <Navigate to={"/category/01"}></Navigate>,
          },
          {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
      },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
    {
        path:"*",
        element: <h1>Eroor</h1>,
    },
])
export default router;