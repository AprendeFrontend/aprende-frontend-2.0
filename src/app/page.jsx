'use client';
import Header from '@/components/header/Header';
import { useSession } from 'next-auth/react';
import styles from './page.module.css';

const HomePage = () => {
  const { data: session, status } = useSession();

  return (
    <div className={styles.page}>
      <Header />
      {status === 'loading' ? <p>Cargando...</p> : session ? <p>Bienvenido, {session.user.name}!</p> : <p>No has iniciado sesión.</p>}
    </div>
  );
};

export default HomePage;
