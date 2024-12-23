import { FC, useState } from "react";
import { CiSpeaker } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { useMeaning, useOneUser, useWrd } from "../../../hooks/useWord";
import moment from "moment";
import { agreedWordMeaning, createNewMeaning } from "../../../api/wordAPI";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { mutate } from "swr";
import _ from "lodash";

const DisplayWords = () => {
  const { data } = useWrd();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="my-5">
      <div>
        <form
          onSubmit={handleSubmit}
          className="rounded-full mb-8 h-[45px] border w-full flex items-center"
        >
          <input
            className="flex-1  rounded-full h-full outline-none pl-2"
            placeholder="Search for word"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="mr-2 hover:bg-slate-900 bg-slate-800 duration-300 transition-all text-white px-4 py-[6px] rounded-full"
            type="submit"
          >
            Search
          </button>
        </form>

        {data?.map((el: any) => (
          <WordMeaning id={el?._id} />
        ))}
      </div>
    </div>
  );
};

export default DisplayWords;

const Who: FC<any> = ({ id }) => {
  const { data } = useOneUser(id);
  return <span className="font-semibold">{data?.userName}</span>;
};

const WordMeaning: FC<any> = ({ id }) => {
  const user = useSelector((el: any) => el.user);
  const { data } = useMeaning(id);

  const [viewMore, setViewMore] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [defined, setDefined] = useState<string>("");
  const [useCase, setUseCase] = useState<string>("");

  const handlePostMeaning = () => {
    setLoading(true);

    createNewMeaning(user?._id, id, { defined, useCase })
      .then(() => {})
      .finally(() => {
        setToggle(false);
      });
  };

  let meanData = _.orderBy(data?.meaning, (item) => item.agreed.length, "desc");

  return (
    <div className="my-6  border rounded-md p-2">
      <Toaster />
      <div className="">
        <main className="flex gap-4 items-center px-2">
          <p className="text-xl capitalize">{data?.word}</p>
          <p className="text-sx cursor-pointer hover:bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300">
            <CiSpeaker />
          </p>
        </main>
        <div className="text-xs px-2 -mt-1 mb-1 flex items-center gap-4">
          <p>created: {moment(data?.createdAt).fromNow()}</p>{" "}
          <div className="w-1 h-1 rounded-full bg-slate-900" />
          <p>
            createdBy: <Who id={data?.postedBy} />
          </p>{" "}
        </div>
        {viewMore ? (
          <div>
            {" "}
            {meanData.slice(0, 5)?.map((el: any) => (
              <div key={el._id} className="border-t my-2 p-2">
                <p className="text-sm px-2 font-semibold capitalize tracking-wider">
                  {el?.defined}
                </p>
                <p className="text-sm italic mt-4  px-2">{el?.useCase[0]}</p>

                <div className="text-sm capitalize  mt-4 flex items-center gap-2">
                  <p
                    className="italic flex items-center gap-1 px-2 transition-all duration-300 w-[50px] py-1 justify-center hover:bg-slate-100 cursor-pointer"
                    onClick={() => {
                      agreedWordMeaning(user?._id, el._id).then((res) => {
                        if (res.status === 201) {
                          console.log(res);
                          toast.success("agreed");
                          mutate(
                            `api/read-all-meaning/${data?.meaning[0]._id}`
                          );
                        } else {
                          toast.error("error");
                        }
                      });
                    }}
                  >
                    <FaRegThumbsUp size={14} /> {el?.agreed.length}
                  </p>

                  <p className="text-[12px]">
                    best defined by: <Who id={el?.definedBy} />
                  </p>
                </div>
              </div>
            ))}
            <div className=" text-xs flex justify-end w-full font-semibold -mt-5 tracking-wider ">
              <button
                className="hover:bg-slate-100 px-2 py-1  transition-all duration-300"
                onClick={() => {
                  if (!document.startViewTransition) {
                    setViewMore(!viewMore);
                  } else {
                    document.startViewTransition(() => {
                      setViewMore(!viewMore);
                    });
                  }
                }}
              >
                see less
              </button>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            {meanData.slice(0, 1)?.map((el: any) => (
              <div key={el._id} className="border-t my-2 p-2">
                <p className="text-sm px-2 font-semibold capitalize tracking-wider">
                  {el?.defined}
                </p>
                <p className="text-sm italic mt-4  px-2">{el?.useCase[0]}</p>

                <div className="text-sm capitalize  mt-4 flex items-center gap-2">
                  <p className="italic flex items-center gap-1 px-2">
                    <FaRegThumbsUp size={14} /> {el?.agreed.length}
                  </p>
                  <p className="text-[12px]">
                    best defined by: <Who id={el?.definedBy} />
                  </p>
                </div>
                <div className=" text-xs flex justify-end w-full font-semibold -mt-5 tracking-wider ">
                  <button
                    className="hover:bg-slate-100 px-2 py-1  transition-all duration-300"
                    onClick={() => {
                      if (!document.startViewTransition) {
                        setViewMore(!viewMore);
                      } else {
                        document.startViewTransition(() => {
                          setViewMore(!viewMore);
                        });
                      }
                    }}
                  >
                    see more
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="my-2 p-2 border-t w-full  grid grid-cols-2 gap-4">
          <div
            className="p-2 border rounded-md flex justify-center gap-2 items-center cursor-pointer"
            onClick={() => {
              agreedWordMeaning(user?._id, data?.meaning[0]._id).then((res) => {
                if (res.status === 201) {
                  console.log(res);
                  toast.success("agreed");
                  mutate(`api/read-all-meaning/${data?.meaning[0]._id}`);
                } else {
                  toast.error("error");
                }
              });
            }}
          >
            <FaRegThumbsUp size={22} />
            <p>Agree</p>
          </div>

          <div
            className="p-2 border rounded-md flex justify-center gap-2 items-center cursor-pointer"
            onClick={() => {
              if (!document.startViewTransition) {
                setToggle(!toggle);
              } else {
                document.startViewTransition(() => {
                  setToggle(!toggle);
                });
              }
            }}
          >
            <FaRegCommentAlt size={22} />
            <p>Add Meaning</p>
          </div>
        </div>
      </div>
      {toggle && (
        <form
          onSubmit={handlePostMeaning}
          className="flex flex-col text-sm mx-2"
        >
          <textarea
            className="h-[60px] mb-2 flex flex-1 border rounded-md p-1 resize-none"
            placeholder="Define this word better..."
            value={defined}
            onChange={(e) => setDefined(e.target.value)}
          />
          <textarea
            className="h-[60px] flex flex-1 border rounded-md p-1 resize-none"
            placeholder="use a use case to the word meaning"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button
              disabled={loading}
              className={`mt-1 px-8 py-2 bg-slate-800 hover:bg-slate-900 transition-all duration-300 text-white uppercase ${
                loading && "animate-pulse bg-neutral-800"
              }`}
              type="submit"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
