const ConverterSection = () => {
  return (
    <section className="converter">
      <div className="converter-container">
        <div className="converter-input">
          <input type="number" placeholder="Amount" />
          <select>
            <option>GBP</option>
          </select>
          <span>⇄</span>
          <input type="number" placeholder="Converted amount" disabled />
          <select>
            <option>EUR</option>
          </select>
        </div>
        <p>£1,000 GBP = €1,213 EUR</p>
      </div>
      <div className="converter-border"> </div>
    </section>
  );
};

export default ConverterSection;
