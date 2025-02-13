import TopBar from '../top-bar/TopBar';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <TopBar />
    </header>
  );
};

export default Header;
