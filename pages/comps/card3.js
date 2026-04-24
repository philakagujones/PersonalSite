import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card3() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Apps+</span>
                <span className={styles.badge}>Coming soon</span>
            </div>

            <p className={styles.body}>
                A better version of 'Apps' for MacOS.
            </p>

            <div>
                <div className={styles.divider}></div>
                <div className={styles.footer}>
                    <div className={styles.icons}>
                        <a href={'https://www.bypbj.co/'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilGithubAlt />
                        </a>
                        <a href={'https://www.bypbj.co/'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilWindow />
                        </a>
                    </div>
                    <span className={styles.stackLabel}>Swift</span>
                </div>
            </div>
        </div>
    )
}

export default Card3;
