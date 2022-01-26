import React, { createContext } from "react";
import useData from "../hooks/useData";
import useFirebase from "../hooks/useFirebase";

export const ContextApi = createContext();
const ContextProvider = ({ children }) => {
  const authData = useFirebase();
  const storeData = useData();

  return (
    <ContextApi.Provider value={{ ...authData, ...storeData }}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
