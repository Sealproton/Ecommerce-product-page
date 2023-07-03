import React, { useContext, useState } from "react";

export const UserContext = React.createContext();

export const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const [oncart, setOnCart] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [navBox, setNavBox] = useState(false);
  return (
    <UserContext.Provider
      value={{
        count,
        setCount,
        oncart,
        setOnCart,
        navBox,
        setNavBox,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};
