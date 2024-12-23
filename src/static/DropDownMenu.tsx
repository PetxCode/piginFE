import { FC } from "react";
import { NavLink } from "react-router-dom";

const DropDownMenu: FC<any> = ({ navList, setToggle }) => {
  return (
    <div className="mt-5">
      <div className="mt-5" />
      {navList.map((item: any, index: number) => (
        <div
          key={index}
          onClick={() => {
            setToggle(false);
          }}
          className="flex w-full items-center cursor-pointer h-full  my-2"
        >
          <NavLink
            to={`${item.url}`}
            className={({ isActive }) =>
              isActive
                ? "font-extrabold w-full bg-black text-white h-full"
                : " w-full h-full"
            }
          >
            <div className="w-full py-2 flex hover:bg-black/20 transition-all duration-300 flex-1 uppercase px-3 text-[14x] text-white font-medium h-full">
              {item.title}
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
