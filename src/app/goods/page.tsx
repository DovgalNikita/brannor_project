import { NextPage } from "next";
import styles from './page.module.scss';
import CatalogSearchMenu from "@/components/CatalogSearchMenu/CatalogSearchMenu";
import GoodsItem from "@/components/GoodsItem/GoodsItem";

const Goods: NextPage = () => {
    return(
        <div className={styles.main}>
            <CatalogSearchMenu marginTop="50px"/>
            <div className={styles.content}>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                <GoodsItem/>
                
            </div>
        </div>
    )
}

export default Goods;