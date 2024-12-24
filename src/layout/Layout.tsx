import { Outlet } from "react-router-dom";

import { FaPlug } from "react-icons/fa";
import { logoutUser } from "../global/authSlice";
import { useDispatch } from "react-redux";
import { FaPowerOff } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative ">
      <Outlet />

      <div className=" md:hidden w-full bg-white h-[60px] shadow-lg border fixed bottom-0 left-0 z-50">
        <div className=" grid grid-cols-4 h-full uppercase">
          <Link
            to="/"
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
          >
            <MdSpaceDashboard className="font-bold text-[15px] mb-1" />
            <p className="text-[12px] ">Home</p>
          </Link>

          <Link
            to="/connection"
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
          >
            <FaPlug className="font-bold text-[15px] mb-1" />
            <p className="text-[12px] ">Connections</p>
          </Link>
          <Link
            to="/setting"
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
          >
            <IoSettingsSharp className="font-bold text-[18px] mb-1" />
            <button className="text-[12px]  uppercase">Profile</button>
          </Link>
          <div
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
            onClick={() => dispatch(logoutUser())}
          >
            <FaPowerOff className="font-bold text-[15px] mb-1" />
            <p className="text-[12px] ">LogOut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
