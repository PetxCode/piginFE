import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    if (currentScrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [navList, setNavList] = useState([
    {
      id: 1,
      title: "About",
      url: "/about",
      state: false,
    },
    {
      id: 2,
      title: "Estate Projects",
      url: "/projects",
      state: false,
    },
    {
      id: 3,
      title: "properties",
      url: "/properties",
      state: false,
    },
    {
      id: 4,
      title: "services",
      url: "/services",
      state: false,
    },
    {
      id: 5,
      title: "contact",
      url: "/contact",
      state: false,
    },
  ]);

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <section className="relative">
      <div
        className={`fixed z-50 top-0 left-0 w-full py-4 transition-transform duration-300 ${
          showHeader
            ? "translate-y-0 text-black transition-all duration-300"
            : "-translate-y-full transition-all duration-300 "
        } ${
          isScrolled
            ? "bg-white text-black transition-all duration-300 border-b"
            : "bg-black text-white "
        }  transition-all duration-300`}
      >
        <div className="mx-4 md:mx-[2rem] lg:mx-[8rem] flex items-center gap-10">
          <Link to="/">
            <p className="text-[25px]">IndoBai</p>
          </Link>
          <div className="md:flex hidden justify-center gap-8 uppercase text-[12px]">
            {navList?.map((el) => (
              <NavLink
                to={`${el.url}`}
                key={el.id}
                className={({ isActive }) => (isActive ? "font-extrabold" : "")}
              >
                {/* <motion.div
                  onHoverStart={() => {
                    setHover(true);
                    el.state = true;
                    setNavList([...navList]);
                  }}
                  onHoverEnd={() => {
                    setHover(false);
                    el.state = false;

                    setNavList([...navList]);
                  }}
                  className="cursor-pointer  flex flex-col items-center relative"
                >
                  {el.title}

                  <AnimatePresence>
                    {hover && el.state && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/4 top-4 w-[50%] h-[2px] mt-3 bg-white"
                      />
                    )}
                  </AnimatePresence>
                </motion.div> */}
              </NavLink>
            ))}
          </div>

          <div className="flex-1" />
          {!toggle ? (
            <div
              className=" md:hidden text-[32px] cursor-pointer transition-all duration-300"
              onClick={() => {
                if (!document.startViewTransition) {
                  setToggle(true);
                } else {
                  document.startViewTransition(() => {
                    setToggle(true);
                  });
                }
              }}
            >
              <MdMenu />
            </div>
          ) : (
            <div
              className=" md:hidden text-[32px] cursor-pointer transition-all duration-300"
              onClick={() => {
                if (!document.startViewTransition) {
                  setToggle(false);
                } else {
                  document.startViewTransition(() => {
                    setToggle(false);
                  });
                }
              }}
            >
              <MdClose />
            </div>
          )}
        </div>
        {toggle && (
          <div
            className={`w-[300px] min-h-[200px] pb-5 bg-black/30 backdrop-blur-sm absolute right-5 z-50 blcok md:hidden
              ${toggle && "top-20"}
              `}
          >
            <DropDownMenu
              navList={navList}
              setToggle={setToggle}
              hover={hover}
              setHover={setHover}
              setNavList={setNavList}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
