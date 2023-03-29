import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card2() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                MOVIE MASTER
            </div>

            <div className={styles.words}>
                Cross platform mobile app to learn all about your favourite films. Built with React & TMDB API. <br />
                Coming soon. <br/> 😌
            </div>

            <div className={styles.bottom}>
                <UilGithubAlt className={styles.github} />
            </div>
        </div>
    )
}

export default Card2;