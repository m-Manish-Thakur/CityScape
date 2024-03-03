import React from "react";
import { Input, InputGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div id="form">
      <div className="wrapper">
        <div className="title">
          <h2>Reset Password</h2>
          <i class="ri-close-circle-line"></i>
        </div>
        <form action="#">
          <Input placeholder="Enter email address" size="lg" className="input" />
          <Input placeholder="Current Password" size="lg" className="input" />
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="New password" size="lg" />
            <div onClick={handleClick} class="right">
              {show ? <i class="ri-eye-line"></i> : <i class="ri-eye-off-line"></i>}
            </div>
          </InputGroup>
          <Button colorScheme="teal" size="lg">
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
