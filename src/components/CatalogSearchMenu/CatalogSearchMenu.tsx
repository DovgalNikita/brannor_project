import styles from './CatalogSearchMenu.module.scss';
import SelectButton from '../UI/SelectButton/SelectButton';
import StyledButton from '../UI/StyledButton/StyledButton';
import {FC} from 'react';

const CatalogSearchMenu: FC<ICatalogSearchMenu> = ({marginTop}) => {
    return(
        <div className={styles.block} style={{marginTop:marginTop}}>
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