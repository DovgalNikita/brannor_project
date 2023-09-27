import { NextPage } from "next"
import styles from './page.module.scss';


const BasketPage: NextPage = () => {
    return(
        <main className={styles.main}>
            <div className={styles.block}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.divider}></div>
                
            </div>
        </main>
    )
}

export default BasketPage;