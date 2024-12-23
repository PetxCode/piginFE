import { FC, ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface iProps {
  children: ReactNode;
}

const PrivateRouter: FC<iProps> = ({ children }) => {
  const user = useSelector((state: any) => state.user);

  let read = Object.keys(user);

  return (
    <div>
      {read.length > 0 ? <div>{children}</div> : <Navigate to="/auth/login" />}
    </div>
  );
};

export default PrivateRouter;
