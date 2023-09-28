import styles from './Basket.module.scss';
import BasketItem from '../BasketItem/BasketItem';

const Basket = () => {
    return(
        <div className={styles.block}>
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
        </div>
    )
}

export default Basket;