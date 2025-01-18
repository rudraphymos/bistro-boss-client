import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUsers from "../pages/Dashboard/AllUsers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "menu",
          element: <Menu></Menu>,
        },
        {
          path: "order/:category",
          element: <Order></Order>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>,
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "carts",
          element: <Cart></Cart>,
        },
        {
          path: "users",
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);
  