import {FC} from 'react'; 
import styles from './GoodsSection.module.scss';
import FrameCaption from '../FrameCaption/FrameCaption';
import Image from 'next/image';
import brakeDisk from '../../assets/images/brakeDisk.png';


const GoodsSection:FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.blockBlur}></div>
                <div className={styles.leftColumn}>
                    <div className={styles.titleSection}>товары</div>

                    <div className={styles.sectionContent}>
                        <div className={styles.titleContent}>
                            диски и колодки BRANNOR это высокотехнологичный и максимально эффективный продукт
                        </div>
                        <div className={styles.frames}>
                            <FrameCaption height="30px">увеличение плавности торможения без потери эффективности</FrameCaption>
                            <FrameCaption height="30px">увеличенный срок службы</FrameCaption>
                            <FrameCaption height="30px">увеличинная эффективность работы</FrameCaption>
                            <FrameCaption height="30px">стабильные характеристики в широком диапазоне температур</FrameCaption>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.discBlur}></div>
                    <Image src={brakeDisk} width={600} height={600} alt="" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default GoodsSection;