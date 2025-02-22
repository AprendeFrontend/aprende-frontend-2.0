import Link from 'next/link';
import styles from './challenge.module.css';

const Challenge = ({ id, name, image, level, description }) => {
  return (
    <Link href={`/challenge/${id}`}>
      <div className={styles['challenge']}>
        <h2 className={styles['challenge-title']}>{name}</h2>
        <div className={styles['challenge-image-container']}>
          <img className={styles['challenge-image']} src={image} alt='' />
        </div>
        <div className={styles['challenge-footer']}>
          <span className={styles['challenge-level']}>NIVEL {level}</span>
          <p className={styles['challenge-description']}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Challenge;
