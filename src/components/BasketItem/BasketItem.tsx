

import styles from './BasketItem.module.scss';
import Image from 'next/image';
import CounterButton from '../UI/CounterButton/CounterButton';

const BasketItem = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <Image src='' alt="" className={styles.img}/>
                <div className={styles.caption}>
                    <div className={styles.titleItem}>Передние тормозные диски для Honda civic</div>
                    <div className={styles.article}>3252345345</div>
                </div>
                <CounterButton />
                <div className={styles.price}>
                    <div className={styles.previousPrice}>20000</div>
                    <div className={styles.totalPrice}>16000 ₽</div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;