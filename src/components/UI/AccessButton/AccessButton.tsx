import { FC } from 'react';
import styles from './AccessButton.module.scss';
import Link from 'next/link';

const AccessButton: FC = () => {
    return(
        <Link href="/authorization">
            <button className={styles.button}>
                Вход
            </button>
        </Link>
    )
}

export default AccessButton;