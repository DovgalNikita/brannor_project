import {FC} from 'react';
import styles from './StyledButton.module.scss';

const StyledButton: FC<IStyledButton> = ({children, height}) => {
    return(
        <button className={styles.button} style={{height:height}}>
            {children}
        </button>
    )
}

export default StyledButton;