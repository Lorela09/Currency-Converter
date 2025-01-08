import { useContext } from "react";
import CurrencyContext from "./CurrencyContext";

const useCurrencyContext = () => {
  return useContext(CurrencyContext);
};

export default useCurrencyContext;
