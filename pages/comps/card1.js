import { UilGithubAlt } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card1() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                HOUSING APP
            </div>

            <div className={styles.words}>
                Mobile app designed to help students find affordable housing. Built with Flutter & Dart.
            </div>

            <div className={styles.bottom}>
                <a href={'https://github.com/philakagujones/UniversityApp'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilGithubAlt className={styles.github} />
                </a>
            </div>
        </div>
    )
}

export default Card1;