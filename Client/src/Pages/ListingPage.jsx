import React, { useState } from "react";
import { Input, Select } from "@chakra-ui/react";
import PropertyCard from "../Components/PropertyCard";

const ListingPage = () => {
  return (
    <div id="listingPage">
      <div className="title">
        <h1>Find Property</h1>
        <div className="filters">
          <div className="search">
            <Input placeholder="Enter your location eg. noida, delhi" size="lg" />
            <i class="ri-search-line"></i>
          </div>

          <select>
            <option value="option1">1 BHK</option>
            <option value="option2">2 BHK</option>
            <option value="option3">3 BHK</option>
          </select>

          <select>
            <option value="option1">Furnished</option>
            <option value="option2">Unfurnished</option>
          </select>

          <Input placeholder="min:" size="lg" />
          <Input placeholder="max:" size="lg" />
          <button>
            Search <i class="ri-search-line"></i>
          </button>
        </div>
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
  );
};

export default ListingPage;
