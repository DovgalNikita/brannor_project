import styles from './main.module.scss';
import CatalogSearchMenu from '../CatalogSearchMenu/CatalogSearchMenu';

const Main = () => {
    return(
      <main className={styles.main}>
          <CatalogSearchMenu />
      </main>
    )
}   

export default Main;