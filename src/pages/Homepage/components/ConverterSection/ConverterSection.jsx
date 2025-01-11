import { useState, useEffect, useCallback } from "react";
import useCurrencyContext from "../../../../context/CurrencyContext/useCurrencyContext";

const ConverterSection = () => {
  const { currencyOptions, currencyData, loading, error } =
    useCurrencyContext();
  const [amount, setAmount] = useState(1000);
  const [baseCurrency, setBaseCurrency] = useState();
  const [targetCurrency, setTargetCurrency] = useState();
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConvert = useCallback(() => {
    if (currencyData && baseCurrency && targetCurrency) {
      const baseRate = currencyData[baseCurrency];
      const targetRate = currencyData[targetCurrency];
      const conversionRate = targetRate / baseRate;
      setConvertedAmount((amount * conversionRate).toFixed(2));
    }
  }, [amount, baseCurrency, currencyData, targetCurrency]);

  useEffect(() => {
    if (currencyData) {
      setBaseCurrency(currencyOptions[1].value);
      setTargetCurrency(currencyOptions[0].value);
    }
  }, [currencyData, currencyOptions]);

  useEffect(() => {
    handleConvert();
  }, [handleConvert]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currencyOptions || !currencyData) {
    return null;
  }

  return (
    <section className="converter">
      <div className="converter-container">
        <div className="converter-input">
          <div className="converter-input-left">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              disabled={loading}
              placeholder="Amount"
              onWheel={(event) => event.target.blur()}
            />
            <select
              value={baseCurrency}
              onChange={(e) => {
                setBaseCurrency(e.target.value);
                handleConvert();
              }}
              disabled={loading}
            >
              {currencyOptions.map((currency) => (
                <option key={currency.value} value={currency.value}>
                  {currency.label}
                </option>
              ))}
            </select>
          </div>
          <span>→</span>
          <div className="converter-input-right">
            <input type="text" value={convertedAmount || ""} readOnly />
            <select
              value={targetCurrency}
              onChange={(e) => {
                setTargetCurrency(e.target.value);
                handleConvert();
              }}
              disabled={loading}
            >
              {currencyOptions.map((currency) => (
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
          <br />
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="converter-border"></div>
    </section>
  );
};

export default ConverterSection;
