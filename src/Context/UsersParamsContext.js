import { createContext, useState } from "react";

export const UsersParamsContext = createContext();
const UsersParamsProvider = ({ children }) => {
  const [params, setParams] = useState({});

  return (
    <UsersParamsContext.Provider
      value={{
        params,
        setParams,
      }}
    >
      {children}
    </UsersParamsContext.Provider>
  );
};

export default UsersParamsProvider;
