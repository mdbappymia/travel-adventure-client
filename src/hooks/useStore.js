import { useContext } from "react";
import { ContextApi } from "../Context/ContextProvider";

const useStore = () => {
  return useContext(ContextApi);
};

export default useStore;
