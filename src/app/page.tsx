import styles from './page.module.scss';
import CatalogSearchMenu from '@/components/CatalogSearchMenu/CatalogSearchMenu';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';
import GoodsSection from '@/components/GoodsSection/GoodsSection';
import { NextPage } from 'next';

const Main: NextPage = () => {
    return(
      <main className={styles.main}>
          <CatalogSearchMenu />
          <WelcomeSection />
          <GoodsSection />
      </main>
    )
}   

export default Main;
