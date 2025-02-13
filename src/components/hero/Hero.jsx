import DynamicButton from '../dynamic-button/DynamicButton';
import styles from './hero.module.css';

const Hero = ({ title, text }) => {
  return (
    <div className={styles['hero']}>
      <h1 className={styles['hero-title']}>{title}</h1>
      <p className={styles['hero-text']}>{text}</p>
      <DynamicButton />
    </div>
  );
};

export default Hero;
