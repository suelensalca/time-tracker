import styles from './styles.module.scss'

export function Card({icon, activity, hours }) {
    return (
        <div className={styles.container}>
            <div className={
                activity === "Work" ? [styles.header, styles.work].join(" ") : 
                activity === "Play" ? [styles.header, styles.play].join(" ") : 
                activity === "Study" ? [styles.header, styles.study].join(" ") : 
                activity === "Exercise" ? [styles.header, styles.exercise].join(" ") : 
                activity === "Social" ? [styles.header, styles.social].join(" ") : 
                activity === "Self Care" ? [styles.header, styles.selfCare].join(" ") : 
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
