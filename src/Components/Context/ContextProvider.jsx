import React from "react";
import { useRef } from "react";
import { createContext } from "react";
import { useState } from "react";
export const ContextData = createContext();

const ContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [service, setService] = useState([]);

  const myRef = useRef(null);

  const data = {
    myRef,
    currentPage,
    setCurrentPage,
    service,
    setService
  };

  return (
    <ContextData.Provider value={data}>{children}</ContextData.Provider>
  )
};

export default ContextProvider;
