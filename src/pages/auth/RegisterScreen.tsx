import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAgentAccount } from "../../api/userAPI";
import { FaSpinner } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleI, setVisibleI] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    createAgentAccount({ userName, email, password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/confirm");
        } else {
          toast(`${res.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center uppercase">
      <Toaster />
      <main className="w-[80%] md:w-[500px] border rounded-md min-h-[200px] p-4">
        <form onSubmit={onHandleSubmit}>
          <div className="text-[25px] font-semibold">
            Register Agent Account
          </div>
          <div className="mb-10">Create an Account</div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold text-xs">Enter user Name</label>
            <input
              required
              type="text"
              className="border p-2 outline-none"
              placeholder="Enter user name"
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold text-xs">Email</label>
            <input
              required
              type="text"
              className="border p-2 outline-none"
              placeholder="m@example.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="w-full flex-col flex mt-2">
            <label className="font-semibold text-xs">
              Enter Choice Password
            </label>
            <div className="w-full border flex justify-between items-center">
              <input
                required
                type={visible ? "text" : "password"}
                className="flex-1 w-full p-2 outline-none"
                placeholder="Enter Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />

              {!visible ? (
                <MdVisibility
                  className="text-neutral-400 mr-3 text-2xl cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                />
              ) : (
                <MdVisibilityOff
                  className="text-neutral-400 mr-3 text-2xl cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                />
              )}
            </div>
          </div>

          <div className="w-full flex-col flex mt-2">
            <label className="font-semibold text-xs">
              Please Repeat Password
            </label>
            <div className="w-full border flex justify-between items-center">
              <input
                required
                type={visibleI ? "text" : "password"}
                className="flex-1 w-full p-2 outline-none"
                placeholder="Enter Password"
                value={passwordConfirm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPasswordConfirm(e.target.value)
                }
              />

              {!visibleI ? (
                <MdVisibility
                  className="text-neutral-400 mr-3 text-2xl cursor-pointer"
                  onClick={() => {
                    setVisibleI(!visibleI);
                  }}
                />
              ) : (
                <MdVisibilityOff
                  className="text-neutral-400 mr-3 text-2xl cursor-pointer"
                  onClick={() => {
                    setVisibleI(!visibleI);
                  }}
                />
              )}
            </div>
          </div>

          {loading ? (
            <button
              type="submit"
              className="mt-6 rounded-md bg-neutral-800 transition-all duration-300 text-white w-full py-3 flex  justify-center items-center"
              disabled={true}
            >
              <span>
                <FaSpinner className="animate-spin mr-2" />
              </span>
              Processing
            </button>
          ) : (
            <button
              type="submit"
              className="mt-6 rounded-md bg-slate-800 hover:bg-slate-900 transition-all duration-300 text-white w-full py-3"
            >
              Register
            </button>
          )}
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="underline italic font-semibold">
            Sign In
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RegisterScreen;
