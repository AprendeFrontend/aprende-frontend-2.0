import Link from 'next/link';
import styles from './menu.module.css';
const Menu = () => {
  return (
    <nav>
      <ul className={styles['menu']}>
        <li>
          <Link href='/challenges'>Desafíos</Link>
        </li>
        <li>
          <Link href='/challenges'>Desafíos</Link>
        </li>
        <li>
          <Link href='/challenges'>Desafíos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
