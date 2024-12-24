import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaSpinner } from "react-icons/fa6";
import { resetPasswordAgentAccount } from "../../api/userAPI";
import toast, { Toaster } from "react-hot-toast";

const ChangePasswordScreen = () => {
  const { token } = useParams();

  const decoded: { id: string; email: string } = jwtDecode(token!);

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    await resetPasswordAgentAccount(decoded?.id, { password })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/login");
        } else {
          toast(`${res.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center ">
      <Toaster />
      <main className="w-[80%] md:w-[500px] border rounded-md min-h-[200px] p-4">
        <form onSubmit={onHandleSubmit}>
          <div className="text-[25px] font-semibold">Change Password</div>
          <div className="mb-10">Reseting Password</div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold">Enter New Password</label>
            <input
              required
              type="text"
              className="border p-2 outline-none"
              placeholder="Enter Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold">Repeat New Password</label>
            <input
              required
              type="text"
              className="border p-2 outline-none"
              placeholder="Enter Password Confirm"
              value={passwordConfirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value)
              }
            />
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
              className="mt-6 rounded-md bg-slate-800 hover:bg-slate-900transition-all duration-300 text-white w-full py-3"
            >
              Change Password
            </button>
          )}
        </form>
      </main>
    </div>
  );
};

export default ChangePasswordScreen;
