import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div id="form">
      <div className="wrapper">
        <div className="title">
          <h2>Login</h2>
          <i class="ri-close-circle-line"></i>
        </div>
        <form action="#">
          <Input placeholder="Enter email address" size="lg" className="input" />
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" size="lg" />
            <div onClick={handleClick} class="right">
              {show ? <i class="ri-eye-line"></i> : <i class="ri-eye-off-line"></i>}
            </div>
          </InputGroup>
          <Button colorScheme="teal" size="lg">
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
