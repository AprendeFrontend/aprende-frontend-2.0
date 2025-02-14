import styles from './css-animation.module.css';

const CSSAnimation = () => {
  return (
    <div className={styles['animation-container']}>
      <div className={styles['project']}>
        <div className={styles['project-header']}></div>
        <div className={styles['project-hero']}></div>
        <div className={styles['project-section-1']}></div>
        <div className={styles['project-section-2']}></div>
        <div className={styles['project-section-3']}></div>
        <div className={styles['project-footer']}></div>
      </div>
      <div className={styles['coding']}>
        <div className={styles['coding-header']}>
          <div className={styles['coding-ball-1']}></div>
          <div className={styles['coding-ball-2']}></div>
          <div className={styles['coding-ball-3']}></div>
          {/* HTML ANIMATION */}
          <div className={styles['coding-html-line-1']}></div>
          <div className={styles['coding-html-line-2']}></div>
          <div className={styles['coding-html-line-3']}></div>
          <div className={styles['coding-html-line-4']}></div>
          <div className={styles['coding-html-line-5']}></div>
          <div className={styles['coding-html-line-6']}></div>
          <div className={styles['coding-html-line-7']}></div>
          <div className={styles['coding-html-line-8']}></div>
          <div className={styles['coding-html-line-9']}></div>
          <div className={styles['coding-html-line-10']}></div>
          <div className={styles['coding-html-line-11']}></div>
          <div className={styles['coding-html-line-12']}></div>
          {/* CSS ANIMATION */}
          <div className={styles['coding-css-line-1']}></div>
          <div className={styles['coding-css-line-2']}></div>
          <div className={styles['coding-css-line-3']}></div>
          <div className={styles['coding-css-line-4']}></div>
          <div className={styles['coding-css-line-5']}></div>
          <div className={styles['coding-css-line-6']}></div>
          <div className={styles['coding-css-line-7']}></div>
          <div className={styles['coding-css-line-8']}></div>
          <div className={styles['coding-css-line-9']}></div>
          <div className={styles['coding-css-line-10']}></div>
          <div className={styles['coding-css-line-11']}></div>
          <div className={styles['coding-css-line-12']}></div>
        </div>
      </div>
    </div>
  );
};

export default CSSAnimation;
