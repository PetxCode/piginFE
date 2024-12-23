import { HiBuildingOffice2 } from "react-icons/hi2";
import { ImOffice } from "react-icons/im";
import { FaRegAddressBook } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdDashboard, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../global/globalProvider";
import { useOneUser } from "@/hooks/useWord";

const Sider = () => {
  const { authUserData }: any = useContext(GlobalContext);

  const { data: userData } = useOneUser(authUserData?._id);

  const data = [
    {
      id: 0,
      title: "Dashboard",
      url: "",
      icon: <MdDashboard />,
    },
    {
      id: 1,
      title: "view properties",
      url: "view-properties",
      icon: <HiBuildingOffice2 />,
    },
    {
      id: 2,
      title: "upload property",
      url: "create-property",
      icon: <FaRegAddressBook />,
    },
    {
      id: 3,
      title: "my properties",
      url: "my-property",
      icon: <ImOffice />,
    },
    {
      id: 3,
      title: "settings",
      url: "settings",
      icon: <CiSettings />,
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="mt-32" />

      <div className="flex gap-2 text-[16px] ">
        <div className="w-[56px] h-[56px] ml-4 mb-5 rounded-full   leading-tight">
          <div className="w-[56px] h-[56px] rounded-full border-red-50 bg-slate-200">
            {userData?.avatar ? (
              <img
                src={userData?.avatar}
                className="h-full w-full rounded-full object-cover "
              />
            ) : (
              <div className="h-full w-full rounded-full pb-0 uppercase font-bold text-[22px] flex items-center justify-center  ">
                {userData?.email?.charAt(0)}
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="font-semibold leading-[1] mb-1">
            {userData?.userName && userData?.userName}
          </p>

          <p className="font-semibold text-[12px]">
            {userData?.email && userData?.email}
          </p>

          <p className="font-semibold text-[12px] line-clamp-2">
            {userData?.location && userData?.location}
          </p>
          {/* <p className="font-semibold text-[12px] line-clamp-2">
            {userData?.bio && userData?.bio}
          </p> */}
          <p className="font-semibold text-[17px]">
            {userData?.userCode && userData?.userCode}
          </p>
        </div>
      </div>

      <div className="mt-12" />

      {data?.map((props: any, i: number) => (
        <NavLink
          key={i}
          to={`${props?.url}`}
          className={({ isActive }) =>
            isActive ? "text-black font-extrabold" : "text-neutral-600"
          }
        >
          <div className="px-4 flex items-center gap-2 font-semibold uppercase text-[14px] cursor-pointer hover:bg-black duration-300 transition-all hover:text-white py-4 mb-2">
            <div className="text-[20px]">{props.icon}</div>
            <p>{props?.title}</p>
          </div>
        </NavLink>
      ))}

      <div className="flex-1" />

      <div
        className="px-4 flex items-center gap-2 font-semibold uppercase text-[14px] cursor-pointer hover:bg-black duration-300 transition-all hover:text-white py-2 "
        onClick={() => {
          localStorage.removeItem("authUser");
          localStorage.removeItem("isLoggedIn");
          location.reload();
        }}
      >
        <div className="text-[36px]">
          <MdLogout />
        </div>
        <p className="tracking-widest">Logout</p>
      </div>
    </div>
  );
};

export default Sider;
