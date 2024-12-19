import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

  return (
    <section className="hero">
      <h1 className="hero-title">CURRENCY CONVERTER</h1>
      <p className="hero-paragraph">
        Wise’s currency converter will show you how much your money is worth in
        other currencies at the real exchange rate. You can convert over 140
        currencies quickly and easily. Simply input your amount in the currency
        calculator above, select your source and destination currency and our
        tool will convert your currency at the mid-market rate (that’s the one
        you’ll usually find on Google).
      </p>
      <div className="hero-actions">
        <Button
          navigateTo="/contact"
          variant="primary"
          onClick={handleGetStartedClick}
        >
          Get started
        </Button>
        <Button
          navigateTo="/contact"
          variant="outlined"
          onClick={handleContactClick}
        >
          Contact sales
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
