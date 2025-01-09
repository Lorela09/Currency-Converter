import HeroSection from "./components/HeroSection/HeroSection";
import ConverterSection from "./components/ConverterSection/ConverterSection";
import HowToSection from "./components/HowToSection/HowToSection";
import APISection from "./components/APISection/APISection";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <ConverterSection />
      <HowToSection />
      <APISection />
    </div>
  );
};

export default HomePage;
