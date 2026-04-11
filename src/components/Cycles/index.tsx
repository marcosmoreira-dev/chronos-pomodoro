import styles from './styles.module.css'

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>

      <div className={styles.cycleDots}>
        <span className={`${styles.cylceDot} ${styles.workTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.workTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.workTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.workTime}`}></span>
        <span className={`${styles.cylceDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  )
}