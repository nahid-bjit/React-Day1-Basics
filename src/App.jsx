import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home.page";
import UserCreatePage from "./pages/userCreate.page";
import UserLoginPage from "./pages/userLogin.page";
import NotFoundPage from "./pages/notFound.page";
import AddBooksPage from "./pages/addBooks.page";
import Navbar from "./components/Navbar";
import useAuthentication from "./hooks/useAuthentication"; // Your custom authentication hook
import Authenticate from "./components/Authenticate";

function App() {
  const { isAuthenticated, isLoading } = useAuthentication();

  if (isLoading) {
    // Optionally, you can show a loading indicator while authentication is in progress.
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/create" element={<UserCreatePage />} />
        <Route path="/user/edit" element={<UserCreatePage />} />
        <Route path="/user/login" element={<UserLoginPage />} />




        <Route element={<Authenticate />} >
          <Route path="/add" element={<AddBooksPage />} />
        </Route>


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
