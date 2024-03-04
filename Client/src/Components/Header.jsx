import React, { useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, token } = useSelector((store) => store.user);
  console.log(user);

  return (
    <div>
      <div id="top">
        <p>
          <i class="ri-phone-line"></i> 1800-255-255
        </p>
        <p>
          <i class="ri-mail-line"></i> cityspace@gmail.com
        </p>
      </div>
      <div id="header">
        <img src="https://wowtheme7.com/tf/cityscape/assets/images/logo/logo.png" className="logo" alt="logo" />
        {/* <img src="Images/logo.png" className="logo" /> */}
        <nav>
          <Link to="/">
            <a href="#">Home</a>
          </Link>
          <Link to="/properties">
            <a href="#">Properties</a>
          </Link>
          <Link to="/about">
            <a href="#">About</a>
          </Link>
          <a href="#">Contact</a>
        </nav>
        <div className="right">
          {user ? (
            <Link to="/user/profile">
              <div className="profile">
                <h4>{user?.username}</h4>
                <h2>{user?.username?.slice(0, 1)}</h2>
              </div>
            </Link>
          ) : (
            <>
              <Button colorScheme="black" variant="outline">
                Register
              </Button>
              <Link to="/user/login">
                <Button colorScheme="orange" size="md">
                  Log in
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
