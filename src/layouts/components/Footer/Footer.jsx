import footerLogo from "../../../assets/images/wise-logo-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>START SAVING WITH WISE BUSINESS TODAY</h2>
        <button>Get started</button>
      </div>
      <div className="footer-links">
        <img src={footerLogo} height="30" />
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/cookies-policy">Cookie Policy</a>
        <a href="/contact">Complaints</a>
      </div>
    </footer>
  );
};

export default Footer;
