import React, { useState, useEffect } from "react";
import useCurrencyData from "../../../../utils/hooks/useCurrencyData";

const currencyList = [
  { value: "USD", label: "USD", flag: "https://flagcdn.com/us.svg" },
  { value: "EUR", label: "EUR", flag: "https://flagcdn.com/eu.svg" },
  { value: "GBP", label: "GBP", flag: "https://flagcdn.com/gb.svg" },
  { value: "JPY", label: "JPY", flag: "https://flagcdn.com/jp.svg" },
  { value: "AUD", label: "AUD", flag: "https://flagcdn.com/au.svg" },
  { value: "CAD", label: "CAD", flag: "https://flagcdn.com/ca.svg" },
  { value: "CHF", label: "CHF", flag: "https://flagcdn.com/ch.svg" },
  { value: "CNY", label: "CNY", flag: "https://flagcdn.com/cn.svg" },
  { value: "SEK", label: "SEK", flag: "https://flagcdn.com/se.svg" },
  { value: "NZD", label: "NZD", flag: "https://flagcdn.com/nz.svg" },
  { value: "ALL", label: "ALL", flag: "https://flagcdn.com/al.svg" },
];

const ConverterSection = () => {
  const { currencyData, loading, error } = useCurrencyData();
  const [amount, setAmount] = useState(1000);
  const [baseCurrency, setBaseCurrency] = useState(currencyList[1].value);
  const [targetCurrency, setTargetCurrency] = useState(currencyList[0].value);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    if (currencyData && baseCurrency && targetCurrency) {
      const baseRate = currencyData[baseCurrency];
      const targetRate = currencyData[targetCurrency];
      if (baseRate && targetRate) {
        const conversionRate = targetRate / baseRate;
        setConvertedAmount((amount * conversionRate).toFixed(2));
      }
    }
  };

  useEffect(() => {
    if (currencyData) {
      handleConvert();
    }
  }, [amount, baseCurrency, targetCurrency, currencyData]);

  return (
    <section className="converter">
      <div className="converter-container">
        <div className="converter-input">
          <div className="converter-input-left">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={loading}
              placeholder="Amount"
            />
            <select
              value={baseCurrency}
              onChange={(e) => setBaseCurrency(e.target.value)}
              disabled={loading}
            >
              {currencyList.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
          <span>⇄</span>
          <div className="converter-input-right">
            <input type="text" value={convertedAmount || ""} readOnly />
            <select
              value={targetCurrency}
              onChange={(e) => setTargetCurrency(e.target.value)}
              disabled={loading}
            >
              {currencyList.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="converter-input-result">
          {convertedAmount && (
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: baseCurrency,
              }).format(amount)}{" "}
              {baseCurrency} ={" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: targetCurrency,
              }).format(convertedAmount)}{" "}
              {targetCurrency}
            </p>
          )}
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="converter-border"></div>
    </section>
  );
};

export default ConverterSection;
