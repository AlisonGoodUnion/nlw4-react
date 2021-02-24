import style from "../styles/components/Profile.module.css"

export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src={"https://github.com/AlisonGoodUnion.png"} alt={"Alison Ramos"}/>
      <div>
        <strong>Alison Ramos</strong>
        <p>
        <img src={"icons/level.svg"} alt={"Level"}/>
          Level 1
        </p>
      </div>
    </div>
  );
}