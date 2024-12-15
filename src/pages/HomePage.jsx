import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ConverterSection from "../components/ConverterSection/ConverterSection";
import HowToSection from "../components/HowToSection/HowToSection";
import APISection from "../components/APISection/APISection";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ConverterSection />
      <HowToSection />
      <APISection />
      <Footer />
    </>
  );
};

export default HomePage;
