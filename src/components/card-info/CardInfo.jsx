import Link from 'next/link';
import CSSAnimation from '../css-animation/CSSAnimation';
import styles from './card-info.module.css';
const CardInfo = ({ title, text, linkHref, linkText, image, reverse = false }) => {
  const cardInfoStyles = reverse ? `${styles['card-info']} ${styles['card-info-reverse']}` : styles['card-info'];
  return (
    <article className={cardInfoStyles}>
      <div className={styles['card-info-content']}>
        <h2 className={styles['card-info-title']}>{title}</h2>
        <p className={styles['card-info-text']}>{text}</p>
        <Link className={styles['card-info-link']} href={linkHref}>
          <span className={styles['card-info-link-text']}>{linkText}</span>
          <img src='/icons/arrow-right.svg' alt='' />
        </Link>
      </div>
      {/* <img className={styles['card-info-image']} src={image} alt='' /> */}
      <CSSAnimation />
    </article>
  );
};

export default CardInfo;
