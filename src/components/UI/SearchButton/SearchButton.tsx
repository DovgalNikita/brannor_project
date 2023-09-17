import {FC} from 'react';
import styles from './SearchButton.module.scss';

const SearchButton: FC<ISearchButton> = ({children}) => {
    return(
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default SearchButton;