import {useEffect, useState} from "react";
import styles from '../styles/components/CountDown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);//arredonda para baixo caso venha hora quebrada ex: 24.59 = 24
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = splitTime(minutes);
  const [secondLeft, secondRight] = splitTime(seconds);

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    //cancelando execucao do timeout ao clicar no abandonar ciclo
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25*60);
  }

  function incrementTimeClock() {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }

//passando o isActive ou time como dependencia do useEffect quando o valor mudar, a funcao sera executada
  useEffect(() => {
    incrementTimeClock();
  }, [isActive, time])


  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {isActive ? (
        <button type={"button"}
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountDown}>
          Abandonar ciclo
        </button>
      ) : (
        <button type={"button"}
                className={styles.countdownButton}
                onClick={startCountDown}>
          Iniciar um ciclo
        </button>
      )}
    </div>
  );
}

function splitTime(minutesOrSeconds: number): string[] {
  //padstart caso não tenhha 2 character ele joga zero a frente da string e o split reparte.
  return String(minutesOrSeconds).padStart(2, '0').split('');
}
