import styles from "./App.module.scss";
import { Card } from "./components/Card";

export function App() {
  return <main className={styles.container}>
    <div>user</div>
    <div className={styles.cardContainer}>
      <Card/>
    </div>
  </main>
}
