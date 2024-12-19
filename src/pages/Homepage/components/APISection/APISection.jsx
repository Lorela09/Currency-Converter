import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../../assets/images/api-image.png";
import Button from "../../../../components/Button/Button";

const APISection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="api-info">
      <div className="api-section-content">
        <div className="api-content">
          <h2>Automate payouts with our API.</h2>
          <p>
            Large and enterprise-level businesses making high volumes of payouts
            can work with our team to create a solution to help them scale. The
            Wise API gives businesses access to the low fees, speedy transfers,
            and smart tech that powers Wise Business transfers.
          </p>

          <Button
            navigateTo="/contact"
            variant="primary"
            onClick={handleContactClick}
          >
            Contact sales
          </Button>
        </div>
        <div className="api-image">
          <img src={image} />
        </div>
      </div>
    </section>
  );
};

export default APISection;
