// src/utils/hooks/useCurrencyData.js

import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyProvider"; // Import context

const useCurrencyData = (baseCurrency) => {
  const { currencyData, loading, error } = useContext(CurrencyContext);

  useEffect(() => {
    // If you wanted to refetch based on baseCurrency, you can put the logic here.
  }, [baseCurrency]);

  return { currencyData, loading, error };
};

export default useCurrencyData;
