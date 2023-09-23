import Link from 'next/link';
import styles from './FooterMenu.module.scss';

const FooterMenu = () => {
    return(
        <ul className={styles.ul}>
            <Link href="" className={styles.li}><li>Контакты</li></Link>
            <Link href="" className={styles.li}><li>Оплата</li></Link>
            <Link href="" className={styles.li}><li>Доставка</li></Link>
            <Link href="" className={styles.li}><li>Поддержка</li></Link>
        </ul>
    )
}

export default FooterMenu;
