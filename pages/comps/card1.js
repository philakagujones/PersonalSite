import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card1() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                HOUSING APP
            </div>

            <div className={styles.words}>
                Mobile app designed to help students find affordable housing (frontend)
            </div>

            <div className={styles.bottom}>
                <UilGithubAlt />
            </div>
        </div>
    )
}

export default Card1;