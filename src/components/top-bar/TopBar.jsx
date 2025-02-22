import Link from 'next/link';
import Login from '../login/Login';
import Menu from '../menu/Menu';
import styles from './top-bar.module.css';

const TopBar = () => {
  return (
    <div className={styles['top-bar']}>
      <Link href='/'>
        <div className={styles['logo-container']}>
          <img className={styles['logo']} src='/assets/logos/logo.svg' alt='' />
          <span>AprendeFrontend</span>
        </div>
      </Link>
      <Menu />
      <Login />
    </div>
  );
};

export default TopBar;
