import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOneUser, useUsers } from "../../../hooks/useWord";
import { addAsFriend } from "../../../api/userAPI";
import _ from "lodash";
import { logoutUser } from "../../../global/authSlice";

export const ConnectWithPeople = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-end mb-5 mt-4">
        <button
          className="bg-slate-800 hover:bg-slate-900 transition duration-300 text-white text-xs px-4 py-2 rounded-md"
          onClick={() => dispatch(logoutUser())}
        >
          Log Out
        </button>
      </div>
      <div className="text-xs">Recommended People to Connect with:</div>

      <div className="mt-5" />
      <AddFriends />
    </div>
  );
};

const AddFriends = () => {
  const { data } = useUsers();

  return (
    <div>
      {_.shuffle(data)?.map((el: any, i: number) => (
        <div className="my-2">
          {i <= 4 && (
            <div>
              <Prof id={el?._id} file={el} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Prof: FC<any> = ({ id }) => {
  const user = useSelector((state: any) => state.user);
  const { data } = useOneUser(id);

  return (
    <div className="border rounded-md bg-white p-4 py-2 flex gap-2">
      {data?.avatar ? (
        <img
          className="w-12 h-12 rounded-full border object-cover"
          src={data?.avatar}
        />
      ) : (
        <div className="w-12 h-12 rounded-full border flex justify-center items-center uppercase font-semibold">
          {data?.email?.charAt(0)}
        </div>
      )}
      <div>
        <p className="text-sm font-semibold">{data?.userName}</p>
        <p className="mb-2 text-xs ">
          Words Added:{" "}
          <span className="font-medium">{data?.wordsAdded?.length}</span>
        </p>
        <button
          className="uppercase bg-black text-white px-6 py-2 rounded-md text-[10px]"
          onClick={() => {
            addAsFriend(user?._id, id).then((res) => {
              if (res.status === 201) {
                alert("Friends as been added successfully");
              } else {
                alert("User already");
              }
            });
          }}
        >
          Connect
        </button>
      </div>
    </div>
  );
};
