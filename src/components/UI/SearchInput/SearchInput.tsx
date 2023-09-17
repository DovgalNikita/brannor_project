import {FC} from 'react';
import styles from './SearchInput.module.scss';


const SearchInput: FC = () => {
    return(
        <input type="text" className={styles.input} placeholder='Введите артикул товара...'/>
    )
}

export default SearchInput;