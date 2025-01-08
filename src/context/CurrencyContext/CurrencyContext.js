import { createContext } from "react";

const CurrencyContext = createContext({
  currencyOptions: [],
  currencyData: {},
  loading: false,
  error: null,
});

export default CurrencyContext;
