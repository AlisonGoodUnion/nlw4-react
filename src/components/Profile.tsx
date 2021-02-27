import style from "../styles/components/Profile.module.css"
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function Profile() {

  const {level} = useContext(ChallengesContext);
  return (
    <div className={style.profileContainer}>
      <img src={"https://github.com/AlisonGoodUnion.png"} alt={"Alison Ramos"}/>
      <div>
        <strong>Alison Ramos</strong>
        <p>
          <img src={"icons/level.svg"} alt={"Level"}/>
          Level {level}
        </p>
      </div>
    </div>
  );
}