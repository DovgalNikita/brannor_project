import { NextPage } from "next"
import styles from './page.module.scss';
import Basket from "@/components/Basket/Basket";


const BasketPage: NextPage = () => {
    return(
        <main className={styles.main}>
            <div className={styles.block}>
                <div className={styles.title}>Корзина</div>
                <div className={styles.divider}></div>
                <div className={styles.content}>
                    <Basket />
                    <div className={styles.orderDetails}></div>
                </div>
                
            </div>
        </main>
    )
}

export default BasketPage;