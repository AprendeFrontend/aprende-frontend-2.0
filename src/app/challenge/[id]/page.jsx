'use client';
import Button from '@/components/button/Button';
import LoginButton from '@/components/login/Login';
import { ALL_CHALLENGES } from '@/constants/challenges';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import styles from './challenge.module.css';

const Challenge = () => {
  const { id } = useParams();
  const { data: session, status } = useSession();
  const selectedChallenge = ALL_CHALLENGES.find(challenge => challenge.id === id);
  return (
    <>
      <header>
        <h1>{selectedChallenge.name}</h1>
        <p>{selectedChallenge.description}</p>
      </header>
      <section className={styles['challenge-container']}>
        <div className={styles['challenge-image-container']}>
          <img className={styles['challenge-image']} src={selectedChallenge.image} alt='challenge image' />
        </div>
        <div className={styles['challenge-info-container']}>
          <h2 className={styles['challenge-info-title']}>Tu Desafío</h2>
          <h3 className={styles['challenge-info-subtitle']}>Recomendaciones</h3>
          <p>Para un desarrollo óptimo de la práctica se recomienda usar:</p>
          <ul>
            {selectedChallenge.suggestions.map(suggestion => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
          <h3>Restricciones</h3>
          <p>Para cumplir el objetivo óptimo de este desafío existen algunas restricciones.</p>
          <ul>
            {selectedChallenge.restrictions.map(restriction => (
              <li key={restriction}>{restriction}</li>
            ))}
          </ul>

          {!session && <LoginButton />}
          {session && (
            <div className={styles['challenge-buttons']}>
              <a href={selectedChallenge.link}>
                <Button className='button-primary'>
                  <img src='/assets/icons/arrow-down.svg' alt='' />
                  Descargar Material
                </Button>
              </a>
              <Button className='button-ghost'>
                <img src='/assets/icons/plus-rounded-icon.svg' alt='' />
                Añadir entrega
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Challenge;
