import { FC } from 'react';
import styles from './Input.module.scss';

const Input: FC<IInput> = ({placeholder, height, width}) => {
    return(
        <input type="text" className={styles.input} placeholder={placeholder} style={{height:height, width:width}} />
    )
}

export default Input;