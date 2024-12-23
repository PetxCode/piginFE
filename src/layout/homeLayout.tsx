import { Outlet } from "react-router-dom";
import Profile from "../pages/home/screen/Profile";
import { ConnectWithPeople } from "../pages/home/screen/ConnectWithPeople";

const HomeLayout = () => {
  return (
    <div className="flex justify-center bg-slate-50 text-slate-900">
      <div className="max-w-[1200px] flex justify-center">
        <div className="grid grid-cols-8 min-h-screen gap-4 ">
          <div className="hidden  lg:block md:col-span-2 p-2 capitalize">
            <Profile />
          </div>
          <div className="col-span-full md:col-span-5 lg:col-span-4 bg-white border overflow-hidden p-2 mt-2 rounded-md">
            <Outlet />
          </div>
          <div className="hidden md:block md:col-span-3 lg:col-span-2 p-2">
            <div className="sticky top-2  border rounded-md p-2 min-h-[500px]">
              <ConnectWithPeople />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
