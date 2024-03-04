import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, InputGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { validateFormData } from "../../Utils/validate";
import axios from "axios";
import { SERVER_URL } from "../../Constants";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Utils/userSlice";

const Login = () => {
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.user);
  const email = useRef();
  const password = useRef();

  const handleLogin = async () => {
    const msg = validateFormData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg === null) {
      try {
        const response = await axios.post(
          `${SERVER_URL}/user/api/v1/auth/login`,
          {
            email: email.current.value,
            password: password.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);

        dispatch(setUser({ user: response.data.user, token: response.data.token }));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        toast({
          title: "Login Successfully.",
          description: "Explore our Services",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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
          <h2>Login</h2>
          <i class="ri-close-circle-line"></i>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <Input ref={email} placeholder="Enter email address" size="lg" className="input" />
          <InputGroup size="md">
            <Input ref={password} type={show ? "text" : "password"} placeholder="Enter password" size="lg" />
            <div onClick={handleClick} class="right">
              {show ? <i class="ri-eye-line"></i> : <i class="ri-eye-off-line"></i>}
            </div>
          </InputGroup>
          {errorMsg && <p id="errorMsg">{errorMsg}</p>}
          <Button colorScheme="teal" size="lg" onClick={handleLogin}>
            Log in
          </Button>

          <Button colorScheme="gray" class="googleLogIn">
            <i class="ri-google-line"></i> Log in with Google
          </Button>
          <br />
          <br />
          <p>
            Don't have an account{" "}
            <span>
              <Link to="/user/signup">Register Now</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
