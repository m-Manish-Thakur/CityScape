import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { SERVER_URL } from "../../Constants";
import { useDispatch } from "react-redux";
import { setUser } from "../../Utils/userSlice";

const ApplyForAgent = ({ isOpen, onOpen, onClose }) => {
  const [location, setLocation] = useState(null);
  const toast = useToast();
  const phone = useRef();
  const email = useRef();
  const bio = useRef();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/user/api/v1/auth/applyForAgent`, {
        location: location,
        phone: phone.current.value,
        email: email.current.value,
        bio: bio.current.value,
      });
      console.log(location);
      console.log(response);
      dispatch(setUser({ user: await response.data.user }));
      toast({
        title: "Agent Approved",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.msg || "An error occurred.";
      toast({
        title: errorMessage,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form action="#" onSubmit={(e) => e.preventDefault()}></form>
          <ModalHeader>Apply For Agent</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              placeholder="Select location"
              size="lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Noida">Noida</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurugaon">Gurugaon</option>
            </Select>
            <Input placeholder="Email" mt={4} size="lg" ref={email} />
            <Input placeholder="Phone no." mt={4} size="lg" ref={phone} />
            <Textarea placeholder="Bio or Description:" mt={4} size="lg" ref={bio} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" onClick={handleSubmit}>
              Apply For Agent
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ApplyForAgent;
