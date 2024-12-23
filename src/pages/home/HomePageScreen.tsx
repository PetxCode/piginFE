import { useState } from "react";
import { MdAudiotrack, MdChecklist } from "react-icons/md";
import { useSelector } from "react-redux";
import DisplayWords from "./screen/DisplayWords";
import { createWord } from "../../api/wordAPI";
import toast, { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";

import Slider from "./Slider";

const HomePageScreen = () => {
  const user = useSelector((state: any) => state.user);

  console.log(user);
  const [loading, setLoading] = useState<boolean>(false);
  const [post, setPost] = useState<boolean>(false);
  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");
  const [useCase, setUseCase] = useState<string>("");
  const [file, setFile] = useState<string>("");

  const uploadFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handlePost = async () => {
    setLoading(true);
    const formData = new FormData();
    let useCaseData = [];
    useCaseData.push(useCase);

    formData.append("file", file);
    formData.append("defined", word);
    formData.append("meaning", meaning);
    formData.append("useCase", useCase);

    createWord(user?._id, { word, meaning, useCase })
      .then((res) => {
        if (res?.status === 201) {
          toast.success("Word added");
          setWord("");
          setMeaning("");
          setUseCase("");
        } else {
          toast.error("Something went wrong");
        }
      })
      .finally(() => {
        setPost(false);
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      <Toaster />
      <div>
        <main className="h-[200px] rounded-md ">
          {/* <div className="border w-[160px] h-full rounded-md">th</div> */}
          <Slider />
        </main>
        <div className="flex justify-end">
          {!post && (
            <button
              className="mt-3 px-8 py-2  bg-slate-900 hover:bg-slate-800 duration-300 transition-all rounded-md text-white uppercase "
              onClick={() => {
                if (!document.startViewTransition) {
                  setPost(true);
                } else {
                  document.startViewTransition(() => {
                    setPost(true);
                  });
                }
              }}
            >
              create Word
            </button>
          )}
        </div>
        {post && (
          <main className="min-h-[200px] mt-4 border rounded-md p-2 shadow-sm ">
            <div className="flex gap-4">
              <textarea
                className="h-[60px] w-[100px] flex flex-1 border p-1 resize-none"
                placeholder="Create word..."
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <textarea
                className="h-[60px] flex flex-1 border p-1 resize-none"
                placeholder="word meaning"
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
              />
            </div>
            <textarea
              className="border w-full mt-3 flex-1 p-1 resize-none h-[90px]"
              placeholder="use case"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
            />
            <div className="flex gap-2">
              <label
                htmlFor="file"
                className="mt-1 px-8 py-2 hover:bg-slate-900 bg-slate-800 duration-300 transition-all rounded-md cursor-pointer text-white uppercase "
              >
                <input type="file" id="file" className="hidden" />
                {file ? (
                  <MdChecklist size={20} />
                ) : (
                  <MdAudiotrack size={20} onClick={uploadFile} />
                )}
              </label>
              {word && meaning && useCase ? (
                <button
                  disabled={loading}
                  className="mt-1 px-8 py-2 hover:bg-slate-900 bg-slate-800 duration-300 transition-all rounded-md cursor-pointer text-white uppercase "
                  onClick={handlePost}
                >
                  {loading ? (
                    <span className="flex gap-3 items-center">
                      <FaSpinner className="animate-spin text-[20px]" />{" "}
                      Loading...
                    </span>
                  ) : (
                    "Post"
                  )}
                </button>
              ) : (
                <button
                  disabled={loading}
                  className="mt-1 px-8 py-2 hover:bg-slate-900 bg-slate-800 duration-300 transition-all cursor-pointer text-white uppercase rounded-md"
                  onClick={() => {
                    if (!document.startViewTransition) {
                      setPost(false);
                    } else {
                      document.startViewTransition(() => {
                        setPost(false);
                      });
                    }
                  }}
                >
                  {loading ? (
                    <span className="flex gap-3 items-center">
                      <FaSpinner className="animate-spin text-[20px]" />{" "}
                      Loading...
                    </span>
                  ) : (
                    "clear"
                  )}
                </button>
              )}
            </div>
          </main>
        )}
      </div>

      <DisplayWords />
    </div>
  );
};

export default HomePageScreen;
