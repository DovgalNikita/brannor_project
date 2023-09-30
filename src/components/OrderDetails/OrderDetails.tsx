import { FC } from "react";
import styles from './OrderDetails.module.scss';
import StyledButton from "../UI/StyledButton/StyledButton";

const OrderDetails : FC= ()  => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.title}>Детали заказа</div>
                <div className={styles.detailsBlock}>
                    <div className={styles.detailsLine}>
                        <div>2 товара</div>
                        <div className={styles.divider}></div>
                        <div>41300 ₽</div>
                    </div>
                    <div className={styles.detailsLine}>
                        <div>Скидка</div>
                        <div className={styles.divider}></div>
                        <div>-2900 ₽</div>
                    </div>
                </div>
                <div className={styles.totalSum}>
                    <div>Итого</div>
                    <div className={styles.divider}></div>
                    <div>-2900 ₽</div>
                </div>
                <StyledButton width={"100%"} margin={"0"} height={"40px"}>Перейти к оформлению</StyledButton>
            </div>
        </div>
    )
}

export default OrderDetails;