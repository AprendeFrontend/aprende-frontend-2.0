import styles from './first-asteroids.module.css';

const SecondAsteroids = () => {
  return (
    <>
      <div className={styles['player-asteroids']}></div>
      <span className={`${styles['shot']} ${styles['shot-1']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-2']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-3']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-4']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-5']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-6']}`}></span>
      <span className={`${styles['enemy']} ${styles['enemy-1']}`}></span>
    </>
  );
};

export default SecondAsteroids;
