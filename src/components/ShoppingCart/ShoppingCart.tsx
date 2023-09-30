import Link from 'next/link';
import styles from './ShoppingCart.module.scss';
import ShoppingCartSVG from '@/assets/svg/ShoppingCartSVG';

const ShoppingCart = () => {
    return(
        <Link href="/basket" className={styles.block}>
            <div className={styles.content}>
                <div className={styles.itemCounter}>3</div>
                <ShoppingCartSVG height={30} width={30} color="#FFFFFF"/>
            </div>
        </Link>
    )
}

export default ShoppingCart;