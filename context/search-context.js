import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchStatus, setSearchStatus] = useState(false);
  const updateSearchStatus = (newStatus) => {
    setSearchStatus(newStatus);
  };
  return (
    <SearchContext.Provider value={{ searchStatus, updateSearchStatus }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
