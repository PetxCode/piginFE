import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/authLayout";
import RegisterScreen from "../pages/auth/RegisterScreen";
import LoginScreen from "../pages/auth/LoginScreen";
import ForgetScreen from "../pages/auth/ForgetScreen";
import ChangePasswordScreen from "../pages/auth/ChangePassword";
import ConfirmScreen from "../pages/auth/ConfirmScreen";
import PasswordRequestConfirmScreen from "../pages/auth/PasswordRequestConfirm";
import VerifyLoginAccountScreen from "../pages/auth/VerifyLoginAccountScreen";
import PrivateRouter from "./privateRouter";
import HomePageScreen from "../pages/home/HomePageScreen";
import HomeLayout from "../layout/homeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <HomePageScreen />,
          },
        ],
      },
    ],
  },

  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterScreen />,
      },
      {
        index: true,
        path: "login",
        element: <LoginScreen />,
      },
      {
        index: true,
        path: "forget",
        element: <ForgetScreen />,
      },
      {
        index: true,
        path: "reset-password/:token",
        element: <ChangePasswordScreen />,
      },
      {
        index: true,
        path: "confirm",
        element: <ConfirmScreen />,
      },
      {
        index: true,
        path: "reset-confirm",
        element: <PasswordRequestConfirmScreen />,
      },
      {
        index: true,
        path: "activate-account/:token",
        element: <VerifyLoginAccountScreen />,
      },
    ],
  },
]);
