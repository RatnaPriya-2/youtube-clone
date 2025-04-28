import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";

const YoutubeContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(24);
  const [searchResults, setSearchResults] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const fetchCategoryData = (id) => {
    setLoading(true);
    fetchDataFromApi(id).then((res) => setSearchResults(res));
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryData(category);
  }, [category]);

  console.log(searchResults);

  return (
    <YoutubeContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        searchResults,
        setSearchResults,
        setCategory,
        loading,
        setLoading,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(YoutubeContext);
};

export { useGlobalContext, AppProvider };
