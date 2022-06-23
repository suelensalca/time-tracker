import styles from "./App.module.scss";
import { Card } from "./components/Card";
import { User } from "./components/User";

export function App() {
  return <main className={styles.container}>
    <User/>
    <div className={styles.cardContainer}>
    <Card icon={'../../../images/icon-work.svg'} activity={"Trabalho"} hours={"36h"}/>
    <Card icon={'../../../images/icon-play.svg'} activity={"Diversão"} hours={"18h"}/>
    <Card icon={'../../../images/icon-study.svg'} activity={"Estudo"} hours={"9h"}/>
    <Card icon={'../../../images/icon-exercise.svg'} activity={"Exercício"} hours={"4h"}/>
    <Card icon={'../../../images/icon-social.svg'} activity={"Social"} hours={"2h"}/>
    <Card icon={'../../../images/icon-self-care.svg'} activity={"Autocuidado"} hours={"1h"}/>
    </div>
  </main>
}
