import { useState, createContext, useContext } from "react";

interface StateContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<undefined | StateContextType>(undefined);

const ToggleProvider = ({ children }: { children: JSX.Element }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <GlobalContext.Provider value={{toggle, setToggle}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useToggle = () => useContext(GlobalContext);

export default ToggleProvider;
