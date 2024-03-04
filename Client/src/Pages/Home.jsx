import React, { useEffect } from "react";
import { Input, Select, Button } from "@chakra-ui/react";
import PropertyCard from "../Components/PropertyCard";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="heroContainer">
          <div className="left">
            <h1>
              Find a perfect property <br /> Where you'll love to live
            </h1>
            <p>We helps businesses customize, automate and scale up their ad production and delivery.</p>
          </div>
          <img src="Images/hero.png" alt="" />
          <div id="searchBox">
            <Input placeholder="Enter Location" size="lg" />
            <Select placeholder="Property Type" size="lg">
              <option value="option1">Apartments</option>
              <option value="option2">Houses</option>
              <option value="option3">Plot</option>
            </Select>
            <Button colorScheme="teal" size="lg">
              Find Now
            </Button>
          </div>
        </div>
      </div>

      {/* #######################  Featured Properties Listing  ################################# */}

      <div id="listingHome">
        <div className="title">
          <div>
            <h1>Featured Properties</h1>
            <div className="categories">
              <p>Apartments</p>
              <p>Villas</p>
              <p>Houses</p>
              <p>Hotels</p>
              <p>Vacation Homes</p>
            </div>
          </div>
          <button>
            Explore All <i class="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="container">
          <PropertyCard img="https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/08/full/1528397457-4687.jpg" />
          <PropertyCard img="https://housing-images.n7net.in/4f2250e8/011e78a82817b8e022528aa752b9734d/v0/medium/samridhi_luxuriya_avenue-sector_150-noida-samridhi_luxuriya.jpg" />
          <PropertyCard img="https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/08/full/1528397457-4687.jpg" />
          <PropertyCard img="https://housing-images.n7net.in/4f2250e8/011e78a82817b8e022528aa752b9734d/v0/medium/samridhi_luxuriya_avenue-sector_150-noida-samridhi_luxuriya.jpg" />
          <PropertyCard img="https://bsmedia.business-standard.com/_media/bs/img/article/2018-06/08/full/1528397457-4687.jpg" />
          <PropertyCard img="https://housing-images.n7net.in/4f2250e8/011e78a82817b8e022528aa752b9734d/v0/medium/samridhi_luxuriya_avenue-sector_150-noida-samridhi_luxuriya.jpg" />
        </div>
      </div>
    </>
  );
};

export default Home;
