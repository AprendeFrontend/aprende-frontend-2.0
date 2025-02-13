import DynamicButton from '../dynamic-button/DynamicButton';
import styles from './feedback.module.css';
const Feedback = () => {
  return (
    <div className={styles['feedback']}>
      <h2 className={styles['feedback-title']}>Recibe feedback GRATIS</h2>
      <p className={styles['feedback-text']}>
        Corregiré tus desafío en vivo y te daré consejos profesionales personalizados. Entrega tus desafíos y los corregiré en vivo,
        señalando errores, dándote consejos prácticos y explicándote como mejorar.
      </p>
      <DynamicButton />
    </div>
  );
};

export default Feedback;
