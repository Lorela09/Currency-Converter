import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyProvider";

const useCurrencyData = (baseCurrency) => {
  const { currencyData, loading, error } = useContext(CurrencyContext);

  useEffect(() => {}, [baseCurrency]);

  return { currencyData, loading, error };
};

export default useCurrencyData;
