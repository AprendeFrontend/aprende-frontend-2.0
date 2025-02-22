import styles from './social-links.module.css';

const SocialLinks = () => {
  return (
    <div className={styles['social-links']}>
      <img src='/assets/icons/discord-icon.svg' alt='discord icon' />
      <img src='/assets/icons/twitter-icon.svg' alt='twitter icon' />
      <img src='/assets/icons/instagram-icon.svg' alt='instagram icon' />
      <img src='/assets/icons/tik-tok-icon.svg' alt='tik-tok icon' />
    </div>
  );
};

export default SocialLinks;
