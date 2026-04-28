import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card4() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Halberd</span>
                <span className={styles.badge}>Javascript · CSS</span>
            </div>

            <p className={styles.body}>
                I can still make websites.
            </p>

            <div>
                <div className={styles.divider}></div>
                <div className={styles.footer}>
                    <div className={styles.icons}>
                        <a href={'https://github.com/philakagujones/Halberd'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilGithubAlt />
                        </a>
                        <a href={'https://halberd-three.vercel.app'} target={'_blank'} rel={'noopener noreferrer'} className={styles.iconBtn}>
                            <UilWindow />
                        </a>
                    </div>
                    <span className={styles.stackLabel}>Next.js</span>
                </div>
            </div>
        </div>
    )
}

export default Card4;
