import useSWR from "swr";
import { readWord, readWordMeaning } from "../api/wordAPI";
import { getOneUser, getUser } from "../api/userAPI";

export const useOneUser = (userID: string) => {
  const { data, isLoading } = useSWR(`api/user/${userID}`, async () => {
    return await getOneUser(userID).then((res) => {
      return res.data;
    });
  });
  return { data, isLoading };
};
export const useUsers = () => {
  const { data, isLoading } = useSWR(`api/users/`, async () => {
    return await getUser().then((res) => {
      return res.data;
    });
  });
  return { data, isLoading };
};

export const useMeaning = (wordID: string) => {
  const { data, isLoading } = useSWR(
    `api/read-all-meaning/${wordID}`,
    async () => {
      return await readWordMeaning(wordID).then((res) => {
        return res.data;
      });
    }
  );
  return { data, isLoading };
};

export const useWrd = () => {
  const { data, isLoading } = useSWR(`api/read-word`, async () => {
    return await readWord().then((res) => {
      return res.data;
    });
  });
  return { data, isLoading };
};

export const useAllUser = () => {
  const { data, isLoading } = useSWR(`api/users`, async () => {
    return await getUser().then((res) => {
      return res.data;
    });
  });
  return { data, isLoading };
};
