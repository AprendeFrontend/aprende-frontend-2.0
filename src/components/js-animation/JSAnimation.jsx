'use client';
import { useState } from 'react';
import Coding from '../coding/Coding';
import styles from './js-animation.module.css';

const JSAnimation = () => {
  const [showHtmlAnimation, setShowHtmlAnimation] = useState(true);
  return (
    <>
      <div className={styles['animation-container']}>
        <div className={styles['screen']}>
          <div className={styles['project-asteroids']}>
            <div className={styles['player-asteroids']}></div>
            <span className={`${styles['shot']} ${styles['shot-1']}`}></span>
            <span className={`${styles['shot']} ${styles['shot-2']}`}></span>
            <span className={`${styles['shot']} ${styles['shot-3']}`}></span>
            <span className={`${styles['shot']} ${styles['shot-4']}`}></span>
            <span className={`${styles['enemy']} ${styles['enemy-1']}`}></span>
          </div>
        </div>

        <Coding showHtmlAnimation={showHtmlAnimation} setShowHtmlAnimation={setShowHtmlAnimation} left />
      </div>
    </>
  );
};

export default JSAnimation;
