import { FC } from "react"
import styles from './WelcomeSection.module.scss';
import Image from "next/image";
import mainScreenLogo from '../../assets/images/mainScreenLogo.png';

const WelcomeSection: FC = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <Image src={mainScreenLogo} width={1000} height={650} alt="" className={styles.img}/>

            </div>
        </div>
    )
}

export default WelcomeSection;