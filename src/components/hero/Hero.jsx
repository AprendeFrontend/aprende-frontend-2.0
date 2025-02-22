import DynamicButton from '../dynamic-button/DynamicButton';
import styles from './hero.module.css';

const Hero = ({ title, text, button = false, ...props }) => {
  const heroStyles = props.className
    .split(' ')
    .map(cls => styles[cls])
    .join(' ');

  return (
    <div className={`${styles['hero']} ${heroStyles}`}>
      <h1 className={styles['hero-title']}>{title}</h1>
      <p className={styles['hero-text']}>{text}</p>
      {button && <DynamicButton />}
    </div>
  );
};

export default Hero;
