import { FC } from "react"
import styles from './WelcomeSection.module.scss';
import Image from "next/image";
import mainScreenLogo from '../../assets/images/mainScreenLogo.png';
import StyledButton from "../UI/StyledButton/StyledButton";

const WelcomeSection: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>

                <div className={styles.leftColumn}>

                    <div className={styles.titleRow}>
                        <p><span>Brannor</span> - продукт новой эпохи</p>
                    </div>
                    <div className={styles.captionRow}>
                        <p>Лучшие фрикционные материалы для тормозных колодок и дисков, основанные  на 
                            самых передовых стандартах  современной автомобильной  промышленности
                        </p>
                    </div>
                    <div className={styles.moreInfoButton}><div><StyledButton width={"fit-content"} height="50px" margin={"0"}>Узнать больше о компании</StyledButton></div></div>
                </div>

                <Image src={mainScreenLogo} width={500} height={300} alt="" className={styles.img}/>
            </div>
        </div>
    )
}

export default WelcomeSection;