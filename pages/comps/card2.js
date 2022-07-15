import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card2() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                MOVIE MASTER
            </div>

            <div className={styles.words}>
                Coming soon. <br/> 😌
            </div>

            <div className={styles.bottom}>
                <UilGithubAlt />
            </div>
        </div>
    )
}

export default Card2;