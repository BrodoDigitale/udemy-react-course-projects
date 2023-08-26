import { useState, useEffect } from "react";


export const useCounter = (increment = true) => {
      const [counter, setCounter] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          if(increment) {
            setCounter((prevCounter) => prevCounter + 1);
          } else {
            setCounter((prevCounter) => prevCounter - 1);
          }
          
        }, 1000);

        return () => clearInterval(interval);
      }, [increment]);

      return counter;
}