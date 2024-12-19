import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  navigateTo,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button ${variant === "outlined" ? "outline" : ""}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
