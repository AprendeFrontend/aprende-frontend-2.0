'use client';
import { useEffect, useRef, useState } from 'react';
import Coding from '../coding/Coding';
import ProjectAnimation from '../project-animation/ProjectAnimation';
import styles from './css-animation.module.css';

const CSSAnimation = () => {
  const [showHtmlAnimation, setShowHtmlAnimation] = useState(true);
  const [showProjectAnimation, setShowProjectAnimation] = useState(false);
  const projectAnimationRef = useRef(null);

  useEffect(() => {
    if (projectAnimationRef.current) {
      projectAnimationRef.current.addEventListener('animationend', () => handleProjectAnimationEnd(setShowProjectAnimation));
    }

    return () => {
      if (projectAnimationRef.current) {
        projectAnimationRef.current.removeEventListener('animationend', () => handleProjectAnimationEnd(setShowProjectAnimation));
      }
    };
  }, []);

  return (
    <div className={styles['animation-container']}>
      {!showProjectAnimation && (
        <div className={styles['project']}>
          <div className={styles['project-header']}></div>
          <div className={styles['project-sections']}>
            <div className={styles['project-section-1']}></div>
            <div className={styles['project-section-2']}>
              <div className='heart'></div>
            </div>
          </div>
          <div className={styles['project-section-3']}></div>
          <div className={styles['project-section-4']}></div>
          <div className={styles['project-section-5']} ref={projectAnimationRef}></div>
          <div className={styles['project-footer']}></div>
        </div>
      )}
      {showProjectAnimation && <ProjectAnimation />}

      <Coding showHtmlAnimation={showHtmlAnimation} setShowHtmlAnimation={setShowHtmlAnimation} />
    </div>
  );
};

const handleProjectAnimationEnd = setShowProjectAnimation => {
  setShowProjectAnimation(true);
};

export default CSSAnimation;
