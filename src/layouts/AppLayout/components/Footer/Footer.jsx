import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import footerLogo from "../../../../assets/images/wise-logo-footer.png";
import Button from "../../../../components/common/Button/Button";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

  return (
    <footer>
      {location.pathname !== "/contact" && (
        <div className="footer-content">
          <h2>START SAVING WITH WISE BUSINESS TODAY</h2>
          <Button
            navigateTo="/contact"
            variant="primary"
            onClick={handleGetStartedClick}
          >
            Get started
          </Button>
        </div>
      )}
      <div className="footer-links">
        <img src={footerLogo} height="30" alt="Footer Logo" />
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/cookies-policy">Cookie Policy</a>
        <a href="/contact">Complaints</a>
      </div>
    </footer>
  );
};

export default Footer;
