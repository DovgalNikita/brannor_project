import {FC} from 'react';
import styles from './StyledButton.module.scss';

const StyledButton: FC<IStyledButton> = ({children, height, margin}) => {
    return(
        <button className={styles.button} style={{height:height, margin:margin}}>
            {children}
        </button>
    )
}

export default StyledButton;