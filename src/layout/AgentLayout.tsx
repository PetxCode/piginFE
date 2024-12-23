import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";

const AgentLayout = () => {
  return (
    <div className="flex bg-slate-50">
      <div className="w-[250px] border-r h-screen bg-slate-100 fixed ">
        <Sider />
      </div>

      <div className="w-full flex justify-end">
        <div className="w-[calc(100vw-310px)] p-2 min-h-[98vh] m-2 rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AgentLayout;
