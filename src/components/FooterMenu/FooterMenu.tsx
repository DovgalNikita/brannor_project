import Link from 'next/link';
import styles from './FooterMenu.module.scss';

const FooterMenu = () => {
    return(
        <ul className={styles.ul}>
            <Link href=""><li className={styles.li}>Контакты</li></Link>
            <Link href=""><li className={styles.li}>Оплата</li></Link>
            <Link href=""><li className={styles.li}>Доставка</li></Link>
            <Link href=""><li className={styles.li}>Поддержка</li></Link>
        </ul>
    )
}

export default FooterMenu;
