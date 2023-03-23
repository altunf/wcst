import { createContext, useState } from "react";

export const WcstContext = createContext("");

export function WcstProvider({ children }) {
  const [result, setResult] = useState([]);
  const [counter, setCounter] = useState(0);

  const values = {
    result,
    setResult,
    counter,
    setCounter,
  };
  return <WcstContext.Provider value={values}>{children}</WcstContext.Provider>;
}
