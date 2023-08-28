import { useState } from "react";

export const useHttp = (requestConfig, applyDataFn) => {
     console.log(applyDataFn)
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);

      const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method ?? "GET",
                headers: requestConfig.methods ?? {},
                body: JSON.stringify(requestConfig.body) ?? null
            }
          );

          if (!response.ok) {
            throw new Error("Request failed!");
          }

          const data = await response.json();
          applyDataFn(data);

        } catch (err) {
          setError(err.message || "Something went wrong!");
        }
        setIsLoading(false);
      };

      return {
        isLoading,
        error,
        sendRequest
      };
};