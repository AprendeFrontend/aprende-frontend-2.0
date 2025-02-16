import { useEffect, useRef } from 'react';
import './coding-css.css';

const CodingCSS = ({ setShowHtmlAnimation }) => {
  const cssAnimationRef = useRef(null);
  useEffect(() => {
    if (cssAnimationRef.current) {
      cssAnimationRef.current.addEventListener('animationend', event => handleCSSAnimationEnd(event, setShowHtmlAnimation));
    }

    return () => {
      if (cssAnimationRef.current) {
        cssAnimationRef.current.removeEventListener('animationend', handleCSSAnimationEnd);
      }
    };
  }, []);
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          ref={i === 11 ? cssAnimationRef : null}
          className={`coding-css-line-${i + 1}`}
          style={{
            '--start-delay': `${i * 0.5}s`,
            '--end-delay': '6s'
          }}
        ></div>
      ))}
    </>
  );
};

const handleCSSAnimationEnd = (event, setShowHtmlAnimation) => {
  if (event.animationName === 'coding-css-fade-out') {
    setShowHtmlAnimation(true);
  }
};

export default CodingCSS;
