import React, { useState } from "react";
import { createContext } from "react";

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SideBarContext.Provider>
  );
};
