import { UilGithubAlt, UilWindow } from '@iconscout/react-unicons'
import Link from 'next/link';
import styles from '../../styles/Cards.module.css'

function Card3() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                leftovers
            </div>

            <div className={styles.words}>
            App that helps you discover recipes based on ingredients you already have. Built with Python, NextJS & TypeScript.
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

export default Card3;