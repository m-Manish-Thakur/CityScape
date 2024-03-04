import React, { useState, useRef } from "react";
import { Input, InputGroup, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { validateFormData } from "../../Utils/validate";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [errorMsg, setErrorMsg] = useState(null);

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignup = async () => {
    const msg = validateFormData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg === null) {
      try {
        const response = await axios.post(
          "http://localhost:8000/user/api/v1/auth/signup",
          {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        username.current.value = "";
        email.current.value = "";
        password.current.value = "";
        navigate("/");
      } catch (error) {
        const errorMessage = error?.response?.data?.msg || "An error occurred.";

        toast({
          title: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <div id="form">
      <div className="wrapper">
        <div className="title">
          <h2>Create Account</h2>
          <i class="ri-close-circle-line"></i>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Enter username" size="lg" className="input" ref={username} />
          <Input placeholder="Enter email address" size="lg" className="input" ref={email} />
          <InputGroup size="md">
            <Input type={show ? "text" : "password"} placeholder="Enter password" size="lg" ref={password} />
            <div onClick={handleClick} class="right">
              {show ? <i class="ri-eye-line"></i> : <i class="ri-eye-off-line"></i>}
            </div>
          </InputGroup>
          {errorMsg && <p id="errorMsg">{errorMsg}</p>}
          <Button colorScheme="teal" size="lg" onClick={handleSignup}>
            Register
          </Button>

          <Button colorScheme="gray" class="googleLogIn">
            <i class="ri-google-line"></i> Register with Google
          </Button>
          <br />
          <br />
          <p>
            Already have an account{" "}
            <span>
              <Link to="/user/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
