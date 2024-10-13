import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
  console.log(currency);
  const [data, setData] = useState({});
  const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    fetch(api)
    .then((res)=> res.json())
    .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  return data;

}

export default useCurrencyInfo;