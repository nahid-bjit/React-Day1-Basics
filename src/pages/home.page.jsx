import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostDemo from "../components/postDemo";
import FetchDemo from "../components/fetchDemo";
import DebounceDemo from "../components/debounceDemo";
export const ProductContext = createContext();

const HomePage = () => {


  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);
  return <div>
    <Navbar />
    <DebounceDemo />
    <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
      <FetchDemo />
    </ProductContext.Provider>
  </div>;
};

export default HomePage;
