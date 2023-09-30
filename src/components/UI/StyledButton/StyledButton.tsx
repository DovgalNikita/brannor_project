import {FC} from 'react';
import styles from './StyledButton.module.scss';

const StyledButton: FC<IStyledButton> = ({children, height, margin, width}) => {
    return(
        <button className={styles.button} style={{height:height, margin:margin, width:width}}>
            {children}
        </button>
    )
}

export default StyledButton;