import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card1() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                bet!
            </div>

            <div className={styles.words}>
                Fun, peer-to-peer platform that lets you place bets with your friends on anything. Coming Soon.
            </div>

            <div className={styles.bottom}>
                <a href={'https://www.bypbj.co/'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilGithubAlt className={styles.github} />
                </a>
            </div>
        </div>
    )
}

export default Card1;