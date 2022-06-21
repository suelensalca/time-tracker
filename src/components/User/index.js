import styles from './styles.module.scss'

export function User() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src='../../../image-jeremy.png'/>
                <p>Jeremy Robson</p>
            </div>
            <div className={styles.timePeriod}>
                <button>Diário</button>
                <button>Semanal</button>
                <button>Mensal</button>
            </div>
        </div>
    )
}