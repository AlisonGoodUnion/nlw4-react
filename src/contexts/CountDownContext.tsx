import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {ChallengesContext} from "./ChallengesContext";

interface CountDownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProps {
  children: ReactNode
}

export const CountDownContext = createContext({} as CountDownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountDownProvider({children}: CountDownProviderProps) {

  const {startNewChallenge} = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);//arredonda para baixo caso venha hora quebrada ex: 24.59 = 24
  const seconds = time % 60;


  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    //cancelando execucao do timeout ao clicar no abandonar ciclo
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }

  function incrementTimeClock() {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge(); /** function do context provider*/
    }
  }

//passando o isActive ou time como dependencia do useEffect quando o valor mudar, a funcao sera executada
  useEffect(() => {
    incrementTimeClock();
  }, [isActive, time])


  return (
    <CountDownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountDown,
      resetCountDown
    }}>
      {children}
    </CountDownContext.Provider>
  );

}