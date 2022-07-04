import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card3() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                WEATHER APP
            </div>

            <div className={styles.words}>
                Don't worry I will update this soon. <br/> 😌
            </div>

            <div className={styles.bottom}>
                <UilGithubAlt />
            </div>
        </div>
    )
}

export default Card3;