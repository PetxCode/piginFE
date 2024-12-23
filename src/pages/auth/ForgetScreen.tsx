import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgetPasswordAgentAccount } from "../../api/userAPI";
import { FaSpinner } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const ForgetScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    await forgetPasswordAgentAccount({ email })
      .then((res) => {
        if (res.status === 201) {
          navigate("/auth/reset-confirm");
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
          <div className="text-[25px] font-semibold">Forget Password</div>
          <div className="mb-10">Requesting Password reset</div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold">Email</label>
            <input
              required
              type="email"
              className="border p-2 outline-none"
              placeholder="m@example.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
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
              className="mt-6 rounded-md bg-black transition-all duration-300 text-white w-full py-3"
            >
              Request New Password
            </button>
          )}
        </form>
        <div className="mt-4 text-center text-sm">
          Hmm, Remember, now?{" "}
          <Link to="/auth/login" className="underline italic font-semibold">
            Go back
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ForgetScreen;
