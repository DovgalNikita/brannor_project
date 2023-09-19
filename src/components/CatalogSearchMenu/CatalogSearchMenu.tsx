import styles from './CatalogSearchMenu.module.scss';
import SelectButton from '../UI/SelectButton/SelectButton';
import StyledButton from '../UI/StyledButton/StyledButton';

const CatalogSearchMenu = () => {
    return(
        <div className={styles.block}>
            <div className={styles.content}>
                <SelectButton defaultValue='Марка'/>
                <SelectButton defaultValue='Модель'/>
                <SelectButton defaultValue='Год'/>
                <SelectButton defaultValue='Комплектация'/>
                <StyledButton height="35px">Поиск по каталогу</StyledButton>
            </div>
        </div>
    )
}

export default CatalogSearchMenu;