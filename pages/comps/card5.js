import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card5() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Habits</span>
                <span className={styles.badge}>Typescript · Tailwind</span>
            </div>

            <p className={styles.body}>
                A simple habit tracker made as a mobile focused progressive web app.
            </p>

            <div>
                <div className={styles.divider}></div>
                <div className={styles.footer}>
                    <div className={styles.icons}>
                        <a href={'https://github.com/philakagujones/habits'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilGithubAlt />
                        </a>
                        <a href={'https://habits.bypbj.co'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilWindow />
                        </a>
                    </div>
                    <span className={styles.stackLabel}>Next.js</span>
                </div>
            </div>
        </div>
    )
}

export default Card5;
