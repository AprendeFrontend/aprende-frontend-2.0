import Button from '../button/Button';
import styles from './discord-banner.module.css';

const DiscordBanner = () => {
  return (
    <section className={styles['discord-banner']}>
      <div className={styles['discord-banner-header']}>
        <h2 className={styles['section-title']}>Programa en comunidad</h2>
        <div>
          <p className={styles['text']}>
            Tenemos un servidor de discord donde podrás hablar con gente que se está enfrentando a los mismos retos que tu, pregunta dudas,
            comparte tu código y conoce gente que está al mismo nivel que tú.
          </p>
          <a href='https://discord.gg/9WzdedkJ64' target='_blank'>
            <Button className='button-white'>
              <img src='/assets/icons/discord-icon-dark.svg' alt='icon discord' />
              Únete
            </Button>
          </a>
        </div>
      </div>
      {/* <img className={styles['rounded-image']} src='/assets/images/discord-screenshot.jpg' alt='' /> */}
    </section>
  );
};

export default DiscordBanner;
