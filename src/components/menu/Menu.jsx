import Link from 'next/link';
import styles from './menu.module.css';
const Menu = () => {
  return (
    <nav>
      <ul className={styles['menu']}>
        <li>
          <Link href='/challenges/html-css/'>Desafíos HTML + CSS</Link>
        </li>
        <li>
          <Link href='/challenges/javascript'>Desafíos JavaScript</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
