import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card3() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                WEATHER APP
            </div>

            <div className={styles.words}>
                Our cat, Puddles, never missed breakfast, until today. When I told my daughter, she said the dolls, which she tucked in their beds each night, were also missing. Puddles loved to play with them—carrying them by the hair, leaving a porcelain hand poking from under the couch or a tiny spikey shoe at the top of the steps.
            </div>

            <div className={styles.bottom}>
                <UilGithubAlt />
            </div>
        </div>
    )
}

export default Card3;