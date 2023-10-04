import DebounceDemo from "./components/debounceDemo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchDemo from "./components/fetchDemo";
import PostDemo from "./components/postDemo";
import useCustomHook from "./hooks/useCustomHook";
import useProductHook from "./hooks/useProductHook";
//import Navbar from "./components/Navbar";
import HomePage from "./pages/home.page";
import UserCreatePage from "./pages/userCreate.page";
import UserLoginPage from "./pages/userLogin.page";
import NotFoundPage from "./pages/notFound.page";
import AddBooksPage from "./pages/addBooks.page";
import Navbar from "./components/Navbar";


function App() {
  // const { count, handleOnclickCount } = useCustomHook(20);
  // const { title } = useProductHook();



  return (
    <>




      {/* <DebounceDemo />

      */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/create" element={<UserCreatePage />} />
          <Route path="/user/edit" element={<UserCreatePage />} />
          <Route path="/user/login" element={<UserLoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/add" element={<AddBooksPage />} />
        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
