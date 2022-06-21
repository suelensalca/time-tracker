import styles from "./App.module.scss";
import { Card } from "./components/Card";
import { User } from "./components/User";

export function App() {
  return <main className={styles.container}>
    <User/>
    <div className={styles.cardContainer}>
      <Card/>
    </div>
  </main>
}
