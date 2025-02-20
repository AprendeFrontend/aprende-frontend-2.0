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
      <div className={`${styles['enemy']} ${styles['enemy-1']}`}></div>
      <span className={`${styles['shot']} ${styles['shot-4']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-5']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-6']}`}></span>
      <div className={`${styles['enemy']} ${styles['enemy-2']}`}></div>
      <span className={`${styles['shot']} ${styles['shot-7']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-8']}`}></span>
      <span className={`${styles['shot']} ${styles['shot-9']}`}></span>
      <div className={`${styles['enemy']} ${styles['enemy-3']}`}></div>
    </>
  );
};

const handleEnemyAnimationEnd = setCurrentAnimation => {
  console.log('FIN EXPLOSION');
  // setCurrentAnimation(2);
};

export default FirstAsteroids;
