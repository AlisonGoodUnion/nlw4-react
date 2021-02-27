import {createContext, ReactNode} from "react";

interface CountDownContextData {

}

interface CountDownProviderProps {
  childen: ReactNode
}

const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({childen}: CountDownProviderProps) {
  return (
    <CountDownContext.Provider value={{}}>
      {childen}
    </CountDownContext.Provider>
  );

}