import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import styles from '../../styles/Cards.module.css'

function Card2() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                wealth
            </div>

            <div className={styles.words}>
                Finance app designed to help people track and manage their finances seamlessly across devices. Built with Java, TypeScript, SQL & React Native. <br />
            </div>

            <div className={styles.bottom}>
                <a href={'https://www.bypbj.co/'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilGithubAlt className={styles.github} />
                </a>
                <a href={'https://www.bypbj.co/'} target={'_blank'} rel={'noopener noreferrer'}>
                    <UilWindow className={styles.window} />
                </a>
            </div>
        </div>
    )
}

export default Card2;