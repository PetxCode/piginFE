import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import FooterForm from "./FooterForm";

const Footer = () => {
  const { pathname } = useLocation();

  // console.log(/^\/properties\/\d+$/.test(pathname));

  return (
    <div className="mt-10">
      {pathname !== "/" && <FooterForm />}

      <div className="w-full h-[80px] bg-black text-white  ">
        <div className="h-full px-4 md:mx-[2rem] lg:px-[8rem] flex justify-between items-center">
          <div className="text-[12px] font-[300] tracking-[2px]">
            © {new Date().getFullYear()} IndoBai. All Rights Reserved.
            <div className="text-[12px] font-[300] tracking-[2px] mt-2">
              Privacy Policy <span className=" border-r mx-4" /> Sitemap
            </div>
          </div>

          <div className="flex gap-4 text-[30px] ">
            <FaFacebookSquare className="text-white/50 hover:text-white cursor-pointer  transition-all duration-300" />
            <FaLinkedin className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
            <FaInstagramSquare
              className="text-white/50 hover:text-white cursor-pointer transition-all
              duration-300"
            />
            <FaYoutube className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
            <FaSquareXTwitter
              className="text-white/50 hover:text-white cursor-pointer transition-all
              duration-300"
            />
            <AiFillTikTok className="text-white/50 hover:text-white cursor-pointer transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
