import { useCallback, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (fetchConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(fetchConfig.url, {
        method: fetchConfig.method ? fetchConfig.method : "GET",
        headers: fetchConfig.headers ? fetchConfig.headers : {},
        body: fetchConfig.body ? JSON.stringify(fetchConfig.body) : null,
      });

      if (!res.ok) throw new Error("Request Failed!");

      const data = await res.json();
      // console.log(data);

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
