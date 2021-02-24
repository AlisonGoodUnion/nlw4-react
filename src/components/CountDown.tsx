import {useState, useEffect} from "react";
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);//arredonda para baixo caso venha hora quebrada ex: 24.59 = 24
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = splitTime(minutes);
  const [secondLeft, secondRight] = splitTime(seconds);

  function startCountDown() {
    setActive(true);
  }

  function incrementTimeClock() {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }

//passando o active ou time como dependencia do useEffect quando o valor mudar, a funcao sera executada
  useEffect(() => {
    incrementTimeClock();
  }, [active, time])

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
      <button type={"button"}
              className={styles.countdownButton}
              onClick={startCountDown}>
        Iniciar um ciclo
      </button>
    </div>
  );
}

function splitTime(minutesOrSeconds: number): string[] {
  //padstart caso não tenhha 2 character ele joga zero a frente da string e o split reparte.
  return String(minutesOrSeconds).padStart(2, '0').split('');
}
