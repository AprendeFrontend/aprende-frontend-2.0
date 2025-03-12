'use client';
import { useEffect, useRef, useState } from 'react';
import Coding from '../coding/Coding';
import FirstAsteroids from '../first-asteroids/FirstAsteroids';
import styles from './js-animation.module.css';

const JSAnimation = () => {
  const [showHtmlAnimation, setShowHtmlAnimation] = useState(true);
  const [firstAnimation, setFirstAnimation] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(1);
  const asteroidsAnimationRef = useRef(null);

  useEffect(() => {
    if (asteroidsAnimationRef.current) {
      asteroidsAnimationRef.current.addEventListener('animationend', () => handleAsteroidsAnimationEnd(setFirstAnimation));
    }

    return () => {
      if (asteroidsAnimationRef.current) {
        asteroidsAnimationRef.current.removeEventListener('animationend', () => handleAsteroidsAnimationEnd(setFirstAnimation));
      }
    };
  }, []);

  return (
    <>
      <div className={styles['animation-container']}>
        <div className={styles['screen']}>
          <div className={styles['project-asteroids']}>
            {firstAnimation && <div ref={asteroidsAnimationRef} className={styles['player-asteroids']}></div>}
            <FirstAsteroids setCurrentAnimation={setCurrentAnimation} />
          </div>
        </div>

        <Coding showHtmlAnimation={showHtmlAnimation} setShowHtmlAnimation={setShowHtmlAnimation} left />
      </div>
    </>
  );
};

const handleAsteroidsAnimationEnd = setFirstAnimation => {
  setFirstAnimation(false);
};

export default JSAnimation;
