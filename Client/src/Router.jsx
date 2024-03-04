import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ListingPage from "./Pages/ListingPage";
import NotFound from "./Pages/NotFound";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import Login from "./Pages/UserAuth/Login";
import Register from "./Pages/UserAuth/Register";
import ResetPassword from "./Pages/UserAuth/ResetPassword";
import Profile from "./Pages/UserProfile/Profile";
import { setUser } from "./Utils/userSlice";

const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser({ user: user, token: token }));
  });

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<ListingPage />} />
          <Route path="/property/propertyDetails" element={<PropertyDetails />} />
          <Route path="/user/profile" element={<Profile />} />

          {/* ############   User   ######################### */}
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Register />} />
          <Route path="/user/resetPassword" element={<ResetPassword />} />

          {/* ############  Not Found  ###################### */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
