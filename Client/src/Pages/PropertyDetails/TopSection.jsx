import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TopSection = () => {
  return (
    <div className="top">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.designcafe.com/wp-content/uploads/2023/01/31151504/contemporary-interior-design-for-the-bedroom.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/bf8702_b09748a16a2540c595aa74c2ead3c4f1~mv2.jpg/v1/fill/w_801,h_553,al_c,q_85,enc_auto/bf8702_b09748a16a2540c595aa74c2ead3c4f1~mv2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="topRight">
        <div className="agentInfo">
          <h2>Agent Details</h2>
          <br />
          <img src="" alt="" />
          <h3>Ajay Singh</h3>
          <p>
            <i class="ri-mail-line"></i> ajaysingh123@gmail.com
          </p>
          <p>
            <i class="ri-phone-fill"></i> +91-8785475869
          </p>
          <button>
            <i class="ri-phone-fill"></i> Contact Agent
          </button>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112827.69730437464!2d78.08867855000001!3d27.906099249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48686459c8b%3A0x95d967276d323613!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709179393988!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
