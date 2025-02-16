import { useEffect, useRef } from 'react';
import './coding-html.css';
let firstAnimation = true;

const CodingHTML = ({ setShowHtmlAnimation }) => {
  const htmlAnimationRef = useRef(null);

  useEffect(() => {
    if (htmlAnimationRef.current) {
      htmlAnimationRef.current.addEventListener('animationend', event => handleHTMLAnimationEnd(event, setShowHtmlAnimation));
    }

    return () => {
      if (htmlAnimationRef.current) {
        htmlAnimationRef.current.removeEventListener('animationend', event => handleHTMLAnimationEnd(event, setShowHtmlAnimation));
      }
    };
  }, []);
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          ref={i === 11 ? htmlAnimationRef : null}
          className={`coding-html-line-${i + 1}`}
          style={{
            '--start-delay': `${firstAnimation ? `${4 + i * 0.5}s` : `${i * 0.5}s`}`,
            '--end-delay': `${firstAnimation ? '10s' : '6s'}`
          }}
        ></div>
      ))}
    </>
  );
};

const handleHTMLAnimationEnd = (event, setShowHtmlAnimation) => {
  if (event.animationName === 'coding-html-fade-out') {
    firstAnimation = false;
    setShowHtmlAnimation(false);
  }
};

export default CodingHTML;
