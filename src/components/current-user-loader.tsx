import React, { ReactElement } from "react";
import { useState, useEffect } from "react";
import { UserProps } from "./user-info";
import { axiosInstance } from "../services/axios.config";

interface CurrentUserLoaderProps {
  children: ReactElement<UserProps> | ReactElement<UserProps>[];
}

const CurrentUserLoader = ({ children }: CurrentUserLoaderProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user: user || undefined });
        }

        return child;
      })}
    </>
  );
};

export default CurrentUserLoader;
