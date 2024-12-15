const ConverterSection = () => {
  return (
    <section className="converter">
      <div className="converter-container">
        <div className="converter-input">
          <div className="converter-input-left">
            <input value="1,000" />
            <select>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <span>⇄</span>
          <div className="converter-input-right">
            <input value="1,213" />
            <select>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>
        <div className="converter-input-result">
          <p>£1,000 GBP = €1,213 EUR</p>
          <button>Convert</button>
        </div>
      </div>
      <div className="converter-border"> </div>
    </section>
  );
};

export default ConverterSection;
