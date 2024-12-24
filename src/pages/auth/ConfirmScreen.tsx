import { Link } from "react-router-dom";

const ConfirmScreen = () => {
  const onHandleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center ">
      <main className="w-[80%] md:w-[500px] border rounded-md min-h-[200px] p-4">
        <form onSubmit={onHandleSubmit}>
          <div className="text-[25px] font-semibold">Account Verification</div>
          <div className="mb-10">Account Identification Process</div>

          <div className="text-[20px] font-semibold mb-10">
            An Email has been sent to you, Please go to the provided email to
            activate your Account
          </div>

          <Link
            to="/"
            type="submit"
            className="mt-6 rounded-md bg-slate-800 hover:bg-slate-900 text-white w-full py-3 flex justify-center"
          >
            Go back home
          </Link>
        </form>
      </main>
    </div>
  );
};

export default ConfirmScreen;
