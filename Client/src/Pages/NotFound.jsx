import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div id="notFound">
      <img
        src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6ad05d87d36002226a05b/65d6b5cfb1225900152356ad/65d6cd14b122590015263b3d/appSource/images/img_frame1000001686.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240302%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240302T024950Z&X-Amz-Expires=25200&X-Amz-Signature=bb3e2ac561c150f08f91bc159267fe8c364cd541322c48c97fa638e35f701644&X-Amz-SignedHeaders=host"
        alt=""
      />
      <h2>Something went wrong</h2>
      <Link to="/">
        <button>
          Home Page <i class="ri-arrow-right-s-line"></i>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
