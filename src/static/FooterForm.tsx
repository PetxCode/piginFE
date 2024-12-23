import { useState } from "react";
import { MdArrowForward } from "react-icons/md";
// import { useOneProperties } from "../hooks/useProperty";
import { FaSpinner } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";

const FooterForm = () => {
  // const { data } = useOneProperties(id!);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [chooseEmail, setChooseEmail] = useState<boolean>(false);
  const [choosePhone, setChoosePhone] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);

  const handleClient = async () => {
    setLoading(true);
  };

  return (
    <div>
      <Toaster />
      <div className="mx-4 md:mx-20 pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-h-[450px]  ">
          <div className="col-span-1 text-[45px] leading-tight lg:text-[50px] xl:text-[80px]">
            {" "}
            Register <br />
            Your
            <br />
            Interest
          </div>
          <div className="col-span-1 md:col-span-2 h-[300px] ">
            <div className="flex flex-col sm:flex-row gap-2 w-full mb-2 ">
              <input
                className="min-h-[45px] md:min-h-[50px] lg:min-h-[70px] flex-1 pl-2 border border-black text-black outline-none"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="min-h-[45px] md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row  gap-2 w-full">
              <input
                className="min-h-[45px] md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="min-h-[45px] md:min-h-[50px] lg:min-h-[70px]  flex-1 pl-2 border border-black text-black outline-none"
                placeholder="Phone Number"
                type=""
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mt-5" />
            <p className="font-medium text-[20px]">
              Preferred mode of contact <span className="text-red-500">*</span>
            </p>

            <div className="flex mt-5 gap-8 text-[20px]">
              <div className="form-control ml-0">
                <label className="label cursor-pointer pl-0 flex gap-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    onChange={() => setChoosePhone(!choosePhone)}
                    checked={choosePhone}
                  />
                  <span className="label-text font-semibold text-[16px]">
                    Phone
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex gap-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    onChange={() => setChooseEmail(!chooseEmail)}
                    checked={chooseEmail}
                  />
                  <span className="label-text font-semibold text-[16px]">
                    Email
                  </span>
                </label>
              </div>
            </div>

            <div className="flex">
              <div
                className={`flex items-center mt-10 border justify-center h-[55px] text-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ${
                  loading && "bg-black text-white"
                } `}
                onClick={handleClient}
              >
                <div className="h-full border-r flex justify-center items-center">
                  {loading ? (
                    <FaSpinner className="text-[23px] animate-spin mx-4" />
                  ) : (
                    <MdArrowForward className="mx-4" />
                  )}
                </div>
                <button className="uppercase font-semibold mx-8">
                  {loading ? "Processing" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
