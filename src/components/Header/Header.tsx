import styles from './Header.module.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';
import SearchInput from '../UI/SearchInput/SearchInput';
import AccessButton from '../UI/AccessButton/AccessButton';
import AuthIcon from '../AuthIcon/AuthIcon';
import Link from 'next/link';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.block}>
                <div className={styles.content}>
                    <Link href="/"><Image src={logo} alt="" className={styles.logo} width={200} height={30}/></Link>
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