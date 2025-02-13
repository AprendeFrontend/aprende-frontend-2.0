import Login from '../login/Login';
import Menu from '../menu/Menu';
import styles from './top-bar.module.css';

const TopBar = () => {
  return (
    <div className={styles['top-bar']}>
      <div className={styles['logo-container']}>
        <img className={styles['logo']} src='/logos/logo.svg' alt='' />
        <span>AprendeFrontend</span>
      </div>
      <Menu />
      <Login />
    </div>
  );
};

export default TopBar;
