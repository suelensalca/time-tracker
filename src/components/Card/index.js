import styles from './styles.module.scss'

export function Card({icon, activity, hours }) {
    return (
        <div className={styles.container}>
            <div className={
                activity === "Trabalho" ? [styles.header, styles.work].join(" ") : 
                activity === "Diversão" ? [styles.header, styles.play].join(" ") : 
                activity === "Estudo" ? [styles.header, styles.study].join(" ") : 
                activity === "Exercício" ? [styles.header, styles.exercise].join(" ") : 
                activity === "Social" ? [styles.header, styles.social].join(" ") : 
                activity === "Autocuidado" ? [styles.header, styles.selfCare].join(" ") : 
                styles.header}>
                <img src={icon} alt={activity}/>
            </div>
            <div className={styles.info}>
                <p className={styles.activity}>{activity}</p>
                <p className={styles.hours}>{hours}</p>
                <p className={styles.pastHours}>Semana Passada - {hours}</p>
            </div>
        </div>
    )
}
