import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import Link from 'next/link';
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
                <a href={'https://github.com/philakagujones/WeatherWatch'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilGithubAlt className={styles.github} />
                </a>
                <a href={'https://weatherwatch-kohl.vercel.app/'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilWindow className={styles.window} />
                </a>
            </div>
        </div>
    )
}

export default Card3;