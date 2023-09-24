import { FC } from 'react';
import styles from './Input.module.scss';

const Input: FC<IInput> = ({placeholder}) => {
    return(
        <input type="text" className={styles.input} placeholder={placeholder}/>
    )
}

export default Input;