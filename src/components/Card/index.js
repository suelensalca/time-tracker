import styles from './styles.module.scss'

export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src='../../../icon-work.svg'/>
            </div>
            <div className={styles.info}>
                <p className={styles.activity}>Trabalho</p>
                <p className={styles.hours}>32h</p>
                <p className={styles.pastHours}>Semana Passada - 36h</p>
            </div>
        </div>
    )
}