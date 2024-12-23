import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex flex-col w-full items-center justify-center">
      <Outlet />
      <div className="flex-1" />

      <div className="text-center mb-5 font-semibold capitalize">
        built with ❤️
      </div>
    </div>
  );
};

export default AuthLayout;
