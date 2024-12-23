import { Link } from "react-router-dom";

const PasswordRequestConfirmScreen = () => {
  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center ">
      <main className="w-[80%] md:w-[500px] border rounded-md min-h-[200px] p-4">
        <form onSubmit={onHandleSubmit}>
          <div className="text-[25px] font-semibold">
            Password Reset Request
          </div>
          <div className="mb-10">Request for Password Change</div>

          <div className="text-[20px] font-semibold mb-10">
            An Email has been sent to you, Please go to the provided email to
            activate your request for a password change
          </div>

          <Link
            to="/"
            type="submit"
            className="mt-6 rounded-md bg-black text-white w-full py-3 flex justify-center"
          >
            Go back home
          </Link>
        </form>
      </main>
    </div>
  );
};

export default PasswordRequestConfirmScreen;
