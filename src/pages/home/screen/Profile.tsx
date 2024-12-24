import { useSelector } from "react-redux";
import { addAsFriend } from "../../../api/userAPI";
import { useOneUser, useUsers } from "../../../hooks/useWord";
import { FC } from "react";
import _ from "lodash";

const Profile = () => {
  const user = useSelector((el: any) => el.user);

  return (
    <div className="sticky top-2">
      <div className="border border-slate-300/40 min-h-[200px] rounded-md overflow-hidden">
        <div className="relative bg-white h-[80px] flex justify-center items-center ">
          {user?.avatar ? (
            <img
              className="top-5 absolute rounded-full w-[120px] h-[120px] object-cover"
              src={user?.avatar}
              alt="Profile Pic"
            />
          ) : (
            <div className="rounded-full w-[120px] h-[120px] flex justify-center items-center border top-5 absolute bg-slate-700 text-white text-[80px] font-semibold">
              {user?.email?.charAt(0)}
            </div>
          )}
        </div>
        <div className="p-4 mt-12">
          <h1 className="text-xl ">{user?.userName}</h1>
          <h1 className="text-xl ">{user?.firstName}</h1>
          <h1 className="text-xl ">{user?.lastName}</h1>
          <p className="text-gray-600 text-sm font-medium -mt-1 lowercase">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="border border-slate-300/40 min-h-[100px] rounded-md overflow-hidden p-2 mt-5">
        <p className="text-sm font-semibold mb-4">Top Five Contrubutors</p>

        <AddFriends />
      </div>
    </div>
  );
};

export default Profile;

const AddFriends = () => {
  const { data } = useUsers();

  return (
    <div className="my-2 ">
      {_.orderBy(_.shuffle(data), (el) => el.wordsAdded.length, "desc")
        .slice(0, 5)
        .map((el: any, i: number) => (
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
        <div className="w-12 h-12 rounded-full border flex justify-center items-center font-semibold">
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
          className="uppercase  hover:bg-slate-900 bg-slate-800 duration-300 transition-all text-white px-6 py-2 rounded-md text-[10px]"
          onClick={() => {
            addAsFriend(user?._id, id).then((res) => {
              console.log(res);
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
