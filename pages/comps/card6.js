import { UilWindow } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card6() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Summit</span>
                <span className={styles.badge}>SwiftUI · HealthKit</span>
            </div>

            <p className={styles.body}>
                A private, HealthKit powered wellness app.
            </p>

            <div>
                <div className={styles.divider}></div>
                <div className={styles.footer}>
                    <div className={styles.icons}>
                        <a href={'https://www.bypbj.co/summit'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilWindow />
                        </a>
                    </div>
                    <span className={styles.stackLabel}>Swift</span>
                </div>
            </div>
        </div>
    )
}

export default Card6;
