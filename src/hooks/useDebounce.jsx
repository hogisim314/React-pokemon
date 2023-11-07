import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => { 
      const handler = setTimeout(()=> {
        setDebouncedValue(value);
      },delay);
    
      return () => {
        clearTimeout(handler);
      }
    }, [value, delay]) // useEffect가 다시 실행되려면 value나 delay가 다시 실행되면 된다. 

    return debouncedValue;
    
}