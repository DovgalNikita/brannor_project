import {FC} from 'react'; 
import styles from './GoodsSection.module.scss';
import FrameCaption from '../FrameCaption/FrameCaption';


const GoodsSection:FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <div className={styles.leftColumn}>
                    <div className={styles.titleSection}>Товары</div>

                    <div className={styles.sectionContent}>
                        <div className={styles.titleContent}>
                            диски и колодки BRANNOR это высокотехнологичный и максимально эффективный продукт
                        </div>
                        <div className={styles.frames}>
                            <FrameCaption height="30px">увеличение плавности торможения без потери эффективности</FrameCaption>
                            <FrameCaption height="30px">увеличение плавности торможения без потери эффективности</FrameCaption>
                            <FrameCaption height="30px">увеличение плавности торможения без потери эффективности</FrameCaption>
                            <FrameCaption height="30px">увеличение плавности торможения без потери эффективности</FrameCaption>
                            <FrameCaption height="30px">увеличение плавности торможения без потери эффективности</FrameCaption>
                        </div>
                    </div>

                </div>
                <div className={styles.rightColumn}>

                </div>
            </div>
        </div>
    )
}

export default GoodsSection;