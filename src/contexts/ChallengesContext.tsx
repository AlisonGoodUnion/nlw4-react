import {createContext, useState, ReactNode} from 'react'

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  /** function passada como param pro provider context, é acessada por toda a aplicacao*/
  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{level, currentExperience,
      challengesCompleted, levelUp}}>
      {children}
    </ChallengesContext.Provider>
  );

}