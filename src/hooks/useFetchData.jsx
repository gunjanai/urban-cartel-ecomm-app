import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
};

export default useFetchData;
