import {useContext} from "react";
import styles from '../styles/components/CountDown.module.css'
import {CountDownContext} from "../contexts/CountDownContext";


export function CountDown() {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = splitTime(minutes);
  const [secondLeft, secondRight] = splitTime(seconds);

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

      {/* Estrutura de como fazer um if ternario no react
        { condicao ? (true) : ( <> (false) </> )}
      */}

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (

        <> {/* Fragment, é como se fosse uma div no html ela nao e exibida.*/}

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
        </>
      )}
    </div>
  );
}

function splitTime(minutesOrSeconds: number): string[] {
  //padstart caso não tenhha 2 character ele joga zero a frente da string e o split reparte.
  return String(minutesOrSeconds).padStart(2, '0').split('');
}
