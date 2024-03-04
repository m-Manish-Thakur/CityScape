import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import ApplyForAgent from "./ApplyForAgent";
import { useDisclosure } from "@chakra-ui/react";

const Profile = () => {
  const { user } = useSelector((store) => store.user);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="profile">
      <h1>Your Profile</h1>
      <div className="container">
        <div className="userInfo">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
          <label>Username: </label>
          <h2>{user?.username}</h2>
          <label>Email: </label>
          <p>{user?.email}</p>
          <br />
          <Button colorScheme="orange">Edit Profile</Button>
        </div>
        <Button colorScheme="orange" size="lg" onClick={onOpen}>
          Apply For Agent
        </Button>
        <ApplyForAgent isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </div>
    </div>
  );
};

export default Profile;
