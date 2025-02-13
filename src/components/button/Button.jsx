import styles from './button.module.css';

const Button = ({ children, ...props }) => {
  const buttonStyles = props.className
    .split(' ')
    .map(cls => styles[cls])
    .join(' ');
  return (
    <button {...props} className={`${styles.button} ${buttonStyles}`}>
      {children}
    </button>
  );
};

export default Button;
