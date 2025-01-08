import { useState, useEffect, useCallback } from "react";
import CurrencyContext from "./CurrencyContext";

export const CurrencyProvider = ({ children }) => {
  const [currencyOptions, setCurrencyList] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCurrencies = useCallback(async () => {
    try {
      const apiKey = "77ad45bbaff3cbea0a8e9131";
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch currency data");
      }

      const data = await response.json();
      setCurrencyList(
        Object.keys(data.conversion_rates).map((currency) => ({
          value: currency,
          label: currency,
          flag: `https://flagcdn.com/${currency.toLowerCase()}.svg`,
        }))
      );
      setCurrencyData(data.conversion_rates);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrencies();
  }, [fetchCurrencies]);

  return (
    <CurrencyContext.Provider
      value={{ currencyOptions, currencyData, loading, error }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
