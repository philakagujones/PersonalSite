import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card2() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                EatTrainBalance
            </div>

            <div className={styles.words}>
                Fitness tracking web application with the capability to track food, workouts and create a meal plan. Built with Spring, Java & SQL. <br />
            </div>

            <div className={styles.bottom}>
                <a href={'https://github.com/ThePixelator0/project-276'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilGithubAlt className={styles.github} />
                </a>
                <a href={'https://cmpt276-project.onrender.com/'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilWindow className={styles.window} />
                </a>
            </div>
        </div>
    )
}

export default Card2;