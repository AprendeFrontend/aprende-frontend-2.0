import CodingCSS from '../coding-css/CodingCSS';
import CodingHTML from '../coding-html/CodingHTML';

import styles from './coding.module.css';

const Coding = ({ showHtmlAnimation, setShowHtmlAnimation, left = false }) => {
  const codingStyles = `${styles['coding']} ${left && styles['coding-left']}`;
  return (
    <div className={codingStyles}>
      <div className={styles['coding-header']}>
        <div className={styles['coding-ball-1']}></div>
        <div className={styles['coding-ball-2']}></div>
        <div className={styles['coding-ball-3']}></div>
        {/* HTML ANIMATION */}
        {showHtmlAnimation && <CodingHTML setShowHtmlAnimation={setShowHtmlAnimation} />}
        {/* CSS ANIMATION */}
        {!showHtmlAnimation && <CodingCSS setShowHtmlAnimation={setShowHtmlAnimation} />}
      </div>
    </div>
  );
};

export default Coding;
