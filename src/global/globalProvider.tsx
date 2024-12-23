import { createContext, FC, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalProvider: FC<any> = ({ children }) => {
  const [user, setUser] = useState<{}>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const authUserData = JSON.parse(localStorage.getItem("authUser")!);
  const authUserState = JSON.parse(localStorage.getItem("isLoggedIn")!);

  return (
    <GlobalContext.Provider
      value={{
        authUserData,
        authUserState,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
