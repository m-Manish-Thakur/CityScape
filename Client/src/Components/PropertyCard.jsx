import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ img }) => {
  return (
    <Link to="/property/propertyDetails">
      <div id="card">
        <div className="image">
          <img src={img} />
        </div>
        <div className="content">
          <h3>
            <i class="ri-map-pin-2-fill"></i> Noida sector-62 IS Global Web
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
            <p>
              <i class="ri-hotel-bed-line"></i> 2 Bed Room
            </p>
            <p>
              <i class="ri-contrast-drop-2-line"></i> 1 Bath
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
            <p>
              <i class="ri-sofa-line"></i> Furnished
            </p>
          </div>
          <div className="buttons">
            <button>View Details</button>
            <span>₹2500/mo</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
