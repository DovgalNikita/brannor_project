import styles from './page.module.scss';
import CatalogSearchMenu from '@/components/CatalogSearchMenu/CatalogSearchMenu';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';

const Main = () => {
    return(
      <main className={styles.main}>
          <CatalogSearchMenu />

          <WelcomeSection />
      </main>
    )
}   

export default Main;
