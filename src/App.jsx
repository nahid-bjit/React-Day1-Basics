import DebounceDemo from "./components/debounceDemo";
import { createContext, useEffect, useState } from "react";
import FetchDemo from "./components/fetchDemo";
import PostDemo from "./components/postDemo";
import useCustomHook from "./hooks/useCustomHook";
import useProductHook from "./hooks/useProductHook";
export const ProductContext = createContext();


function App() {
  // const { count, handleOnclickCount } = useCustomHook(20);
  // const { title } = useProductHook();

  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);


  return (
    <>

      <DebounceDemo />

      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <PostDemo />
        <FetchDemo />
      </ProductContext.Provider>
      {/* <PostDemo /> */}
      {/* <FetchDemo />
      <PostDemo /> */}

      {/* <div>
        <h1>Custom hooks</h1>
        <h3>Title: {title}</h3>
        <h4>Count val: {count}</h4>
        <button onClick={handleOnclickCount}>Increase</button>
      </div> */}
    </>
  );
}

export default App;
