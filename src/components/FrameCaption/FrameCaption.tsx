import {FC} from 'react';
import styles from './FrameCaption.module.scss';


const FrameCaption:FC<IFrameCaption> = ({children,height}) => {
    return(
        <div className={styles.frame} style={{height:height, borderRadius:height}}>
            {children}
        </div>
    )
}

export default FrameCaption;