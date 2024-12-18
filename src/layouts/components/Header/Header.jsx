import logo from "../../../assets/images/wise-logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} height="70" />
      </a>
    </header>
  );
};

export default Header;
