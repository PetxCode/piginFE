import { Outlet } from "react-router-dom";
import { FaRegAddressBook, FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
// import CollapsibleBanner from "../pages/screen/Banner";

import { logoutUser } from "../global/authSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  // const [state, setState] = useState<boolean>(false);

  const email = "ghettodeveloper@gmail.com";
  const subject = "Hello";
  const content = "This is Peter";

  const phoneNumber = "2348137204472";
  const message =
    "Hello! I would like to give you the Best deal, let's get started.";
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="relative ">
      <Outlet />

      <div className=" md:hidden w-full bg-white h-[60px] shadow-lg border fixed bottom-0 left-0 z-50">
        <div className=" grid grid-cols-4 h-full uppercase">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(content)}`}
            // onClick={() => setState(true)}
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
          >
            <FaRegAddressBook className="font-bold text-[15px] mb-1" />
            <p className="text-[12px] font-semibold">Enquire</p>
          </a>
          <div
            onClick={handlePhoneCallClick}
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
          >
            <IoCallSharp className="font-bold text-[15px] mb-1" />
            <p className="text-[12px] font-semibold">Call</p>
          </div>
          <div
            onClick={() => {
              handleWhatsAppClick();
            }}
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
          >
            <FaWhatsapp className="font-bold text-[18px] mb-1" />
            <button className="text-[12px] font-semibold">Whatsapp</button>
          </div>
          <div
            className="w-full flex flex-col justify-center items-center h-full border-r cursor-pointer"
            onClick={() => dispatch(logoutUser())}
          >
            <FaRegAddressBook className="font-bold text-[15px] mb-1" />
            <p className="text-[12px] font-semibold">LogOut</p>
          </div>
        </div>
      </div>

      {/* <div className="h-[60px]" /> */}

      {/* {state && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-[2px]  z-50 flex justify-center items-center">
          <div className="w-[600px] p-5 bg-white shadow-md rounded-md">
            <div className="flex justify-end">
              <button
                onClick={() => setState(false)}
                className="text-sm text-white font-semibold px-6 py-2 cursor-pointer bg-red-500 hover:bg-red-600"
              >
                Close
              </button>
            </div>
            <h3 className="text-xl font-bold">Enquire</h3>
            <p className="text-gray-600 text-[14px] font-semibold">
              Please fill out the form below to get in touch with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 w-full mb-2 ">
              <input
                className="min-h-[45px] md:min-h-[50px] lg:min-h-[70px] flex-1 pl-2 border border-black text-black outline-none"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="min-h-[45px] md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                placeholder="Subject this Email"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row  gap-2 w-full">
              <textarea
                className="min-h-[300px] md:min-h-[50px] lg:min-h-[300px] resize-none flex-1 pl-2 border border-black text-black outline-none"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="flex mt-5">
              <button
                onClick={() => {
                  setState(false);
                }}
                className="text-sm text-white font-semibold duration-300 transition-all cursor-pointer px-6 py-2  bg-neutral-950 hover:bg-neutral-900"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Layout;
