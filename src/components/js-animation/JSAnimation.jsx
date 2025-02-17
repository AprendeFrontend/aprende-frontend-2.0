'use client';
import { useState } from 'react';
import Coding from '../coding/Coding';
import styles from './js-animation.module.css';

const JSAnimation = () => {
  const [showHtmlAnimation, setShowHtmlAnimation] = useState(true);
  return (
    <>
      <div className={styles['animation-container']}>
        <div className={styles['screen']}></div>
        <div className={styles['project-dino-box']}></div>
        <Coding showHtmlAnimation={showHtmlAnimation} setShowHtmlAnimation={setShowHtmlAnimation} left />
      </div>
    </>
  );
};

export default JSAnimation;
