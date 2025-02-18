'use client';
import { useEffect, useRef } from 'react';
import styles from './first-asteroids.module.css';

const FirstAsteroids = ({ setCurrentAnimation }) => {
  const enemy1AnimationRef = useRef(null);

  useEffect(() => {
    if (enemy1AnimationRef.current) {
      enemy1AnimationRef.current.addEventListener('animationend', () => handleEnemyAnimationEnd(setCurrentAnimation));
    }

    return () => {
      if (enemy1AnimationRef.current) {
        enemy1AnimationRef.current.removeEventListener('animationend', () => handleEnemyAnimationEnd(setCurrentAnimation));
      }
    };
  }, []);

  return (
    <>
      <div className={styles['player-asteroids']}></div>
      <span className={`${styles['shot']} ${styles['shot-1']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-2']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-3']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-4']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-5']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-6']}`}></span>
      <span className={`${styles['enemy']} ${styles['enemy-1']}`} ref={enemy1AnimationRef}></span>
    </>
  );
};

const handleEnemyAnimationEnd = setCurrentAnimation => {
  console.log('FIN EXPLOSION');
  setCurrentAnimation(2);
};

export default FirstAsteroids;
