import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ListingPage from "./Pages/ListingPage";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<ListingPage />} />
          <Route path="/property/propertyDetails" element={<PropertyDetails />} />

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

export default App;
