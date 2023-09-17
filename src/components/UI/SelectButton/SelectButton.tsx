import {FC} from 'react';
import styles from './SelectButton.module.scss';

const SelectButton: FC<ISelectButton> = ({defaultValue}) => {
    return(
        <div className={styles.selectWrapper}>
            <select className={styles.select}>
                <option disabled selected>{defaultValue}</option>
            </select>
        </div>
    )
}

export default SelectButton;