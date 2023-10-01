import {FC} from 'react';
import styles from './SelectButton.module.scss';


const SelectButton: FC<ISelectButton> = ({defaultValue}) => {
    return(
        <div className={styles.selectWrapper}>
            <select className={styles.select} defaultValue={defaultValue}>
                <option disabled value={defaultValue}>{defaultValue}</option>
                <option  value={defaultValue}>{defaultValue}</option>
            </select>
        </div>
    )
}

export default SelectButton;