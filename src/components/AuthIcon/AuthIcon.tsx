import { FC } from 'react';
import styles from './AuthIcon.module.scss';
import PersonSVG from '@/assets/svg/PersonSVG';
import Link from 'next/link';


const AuthIcon: FC <IAuthIcon> = ({name}) => {
    return(
        <Link href="/lk" className={styles.block}>
            <div>
                <PersonSVG color="#FFFFFF" width={30} height={30}/>
                {
                    (name.split("")).length <= 10 
                    ? <div className={styles.title}>{name}</div> 
                    : <div className={styles.title}>{name.slice(0,7)}...</div>
                }
            </div>
        </Link>
    )
}

export default AuthIcon;