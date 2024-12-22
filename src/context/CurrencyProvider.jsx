// // src/context/CurrencyProvider.jsx

// import React, { createContext, useState, useEffect } from "react";

// // Create the context object and export it
// export const CurrencyContext = createContext();

// export const CurrencyProvider = ({ children }) => {
//   const [currencyData, setCurrencyData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCurrencies = async () => {
//       try {
//         const response = await fetch(
//           "https://v6.exchangerate-api.com/v6/77a4d5bafff3cbea0a8e9131/latest/USD"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch currency data");
//         }
//         const data = await response.json();
//         setCurrencyData(data.rates); // Store only the rates object
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchCurrencies();
//   }, []); // The useEffect only runs once to fetch initial data

//   return (
//     <CurrencyContext.Provider value={{ currencyData, loading, error }}>
//       {children}
//     </CurrencyContext.Provider>
//   );
// };

// export default CurrencyProvider;

// src/context/CurrencyProvider.jsx

// src/context/CurrencyProvider.jsx

// src/context/CurrencyProvider.jsx

import React, { createContext, useState, useEffect } from "react";

// Create the context object and export it
export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currencyData, setCurrencyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const apiKey = "77a4d5bafff3cbea0a8e9131"; // Your API Key
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const data = await response.json();
        setCurrencyData(data.conversion_rates); // Use conversion_rates for correct structure
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currencyData, loading, error }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
