import styles from './Header.module.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import SearchInput from '../UI/SearchInput/SearchInput';
import AccessButton from '../UI/AccessButton/AccessButton';
import AuthIcon from '../AuthIcon/AuthIcon';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.block}>
                <div className={styles.content}>
                    <Image src={logo} alt="" className={styles.logo} width={200} height={30}/>
                    <SearchInput />
                    <HeaderMenu/>
                    {/* <AuthIcon name = "Анатолий"/> */}
                    <AccessButton />
                </div>
            </div>
        </header>
    )
}

export default Header;