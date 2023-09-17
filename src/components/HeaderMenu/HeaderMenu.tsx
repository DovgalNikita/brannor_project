import { FC } from "react"
import styles from './HeaderMenu.module.scss';
import Link from "next/link";


const HeaderMenu: FC = () => {
    return(
        <ul className={styles.ul}>
            <Link className={styles.li} href=""><li>Компания</li></Link>
            <Link className={styles.li} href=""><li>Продукция</li></Link>
            <Link className={styles.li} href=""><li>Поддержка</li></Link>
            <Link className={styles.li} href=""><li>Где купить</li></Link>
        </ul>
    )
}

export default HeaderMenu;