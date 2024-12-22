import React, { useState, useEffect } from "react";
import Select from "react-select";
import Button from "../../../../components/common/Button/Button";
import useCurrencyData from "../../../../utils/hooks/useCurrencyData";

// Define the currency list including Albanian Lek
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

const formatOptionLabel = ({ label, flag }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={flag}
      alt={label}
      style={{ width: "20px", marginRight: "10px" }}
    />
    {label}
  </div>
);

const ConverterSection = () => {
  const { currencyData, loading, error } = useCurrencyData();
  const [amount, setAmount] = useState(1000);
  const [baseCurrency, setBaseCurrency] = useState(currencyList[1]); // Default to EUR
  const [targetCurrency, setTargetCurrency] = useState(currencyList[0]); // Default to USD
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = () => {
    if (currencyData && baseCurrency && targetCurrency) {
      const baseRate = currencyData[baseCurrency.value];
      const targetRate = currencyData[targetCurrency.value];
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
            <Select
              value={baseCurrency}
              onChange={setBaseCurrency}
              options={currencyList}
              isDisabled={loading}
              formatOptionLabel={formatOptionLabel}
              styles={{ control: (base) => ({ ...base, minWidth: 100 }) }}
            />
          </div>
          <span>⇄</span>
          <div className="converter-input-right">
            <input type="text" value={convertedAmount || ""} readOnly />
            <Select
              value={targetCurrency}
              onChange={setTargetCurrency}
              options={currencyList}
              isDisabled={loading}
              formatOptionLabel={formatOptionLabel}
              styles={{ control: (base) => ({ ...base, minWidth: 100 }) }}
            />
          </div>
        </div>
        <div className="converter-input-result">
          {convertedAmount && (
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: baseCurrency.value,
              }).format(amount)}{" "}
              {baseCurrency.label} ={" "}
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: targetCurrency.value,
              }).format(convertedAmount)}{" "}
              {targetCurrency.label}
            </p>
          )}{" "}
          <br></br>
          <Button variant="primary" onClick={handleConvert} disabled={loading}>
            {loading ? "Converting..." : "Convert"}
          </Button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="converter-border"></div>
    </section>
  );
};

export default ConverterSection;
