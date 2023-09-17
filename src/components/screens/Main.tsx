import styles from './main.module.scss';
import CatalogSearchMenu from '../CatalogSearchMenu/CatalogSearchMenu';
import WelcomeSection from '../WelcomeSection/WelcomeSection';

const Main = () => {
    return(
      <main className={styles.main}>
          <CatalogSearchMenu />

          <WelcomeSection />
      </main>
    )
}   

export default Main;