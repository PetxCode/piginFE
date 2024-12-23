import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loginAgentAccount, verifyAgentAccount } from "../../api/userAPI";
import { FaSpinner } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../../global/authSlice";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const VerifyLoginAccountScreen = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onHandleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    await loginAgentAccount({ email, password })
      .then((res) => {
        if (res.status === 201) {
          dispatch(loginUser(res.data));

          navigate("/");
        } else {
          toast(`${res.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      const decoded: { id: string; email: string } = jwtDecode(token);

      verifyAgentAccount(decoded?.id!)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            // navigate("/agent");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="flex flex-col h-full w-full items-center justify-center uppercase">
      <Toaster />
      <main className="w-[80%] md:w-[500px] border rounded-md min-h-[200px] p-4">
        <form onSubmit={onHandleSubmit}>
          <div className="text-[25px] font-semibold">Login Agent Account</div>
          <div className="mb-10">Login an Account</div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold text-xs">Email</label>
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

          <div className="flex flex-col mb-2">
            <div className="flex justify-end mb-1">
              <label className="font-semibold text-xs">
                <Link
                  to="/auth/forget"
                  className="underline italic text-neutral-600 "
                >
                  Forget Password?
                </Link>
              </label>
            </div>

            <div className="w-full flex-col flex mt-2">
              <label className="font-semibold text-xs">Enter Password</label>
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
              Login
            </button>
          )}
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/auth" className="underline italic font-semibold">
            Register
          </Link>
        </div>
      </main>
    </div>
  );
};

export default VerifyLoginAccountScreen;
