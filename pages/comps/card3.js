import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card3() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                WEATHER WATCH
            </div>

            <div className={styles.words}>
            iOS and Android installable weather PWA built with Next.js and the OpenWeather API
            </div>

            <div className={styles.bottom}>
                <UilGithubAlt />
            </div>
        </div>
    )
}

export default Card3;