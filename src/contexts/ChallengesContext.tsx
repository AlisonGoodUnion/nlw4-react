import {createContext, ReactNode, useState} from 'react'

interface ChallengesContextData {
  level: number,
  levelUp: () => void,
  currentExperience: number,
  challengesCompleted: number,
  startNewChallenge: () => void
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  /** function passada como param pro provider context, é acessada por toda a aplicacao*/
  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New Challenge')
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );

}