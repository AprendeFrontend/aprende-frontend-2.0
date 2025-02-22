import Link from 'next/link';
import CSSAnimation from '../css-animation/CSSAnimation';
import JSAnimation from '../js-animation/JSAnimation';
import styles from './card-info.module.css';
const CardInfo = ({ title, text, linkHref, linkText, animation, reverse = false }) => {
  const cardInfoStyles = reverse ? `${styles['card-info']} ${styles['card-info-reverse']}` : styles['card-info'];
  return (
    <article className={cardInfoStyles}>
      <div className={styles['card-info-content']}>
        <h2 className={styles['card-info-title']}>{title}</h2>
        <p className={styles['card-info-text']}>{text}</p>
        <Link className={styles['card-info-link']} href={linkHref}>
          <span className={styles['card-info-link-text']}>{linkText}</span>
          <img src='/assets/icons/arrow-right.svg' alt='' />
        </Link>
      </div>
      {animation === 'CSS' && <CSSAnimation />}
      {animation === 'JS' && <JSAnimation />}
    </article>
  );
};

export default CardInfo;
