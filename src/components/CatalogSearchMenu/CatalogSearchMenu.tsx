import styles from './CatalogSearchMenu.module.scss';
import SelectButton from '../UI/SelectButton/SelectButton';
import SearchButton from '../UI/SearchButton/SearchButton';

const CatalogSearchMenu = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <SelectButton defaultValue='Марка'/>
                <SelectButton defaultValue='Модель'/>
                <SelectButton defaultValue='Год'/>
                <SelectButton defaultValue='Комплектация'/>
                <SearchButton>Поиск по каталогу</SearchButton>
            </div>
        </div>
    )
}

export default CatalogSearchMenu;