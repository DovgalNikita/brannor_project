import styles from './Footer.module.scss';
import Image from 'next/image';
import FooterMenu from '../FooterMenu/FooterMenu';
import logo from '../../assets/images/logo.png';
import { FC } from 'react';

const Footer: FC = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.content}>
                <Image className={styles.img} src={logo} alt="" height={60} width={400}/>
                <div className={styles.divLine}></div>
                <FooterMenu />
            </div>
        </div>
    )
}

export default Footer;