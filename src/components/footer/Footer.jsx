import SocialLinks from '../social-links/SocialLinks';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <SocialLinks />
      <span className={styles['copy']}>©Aprende Frontend - DorianDesings 60% - Camila 40% - 2025</span>
    </footer>
  );
};

export default Footer;
