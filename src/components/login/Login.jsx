'use client';
import { login } from '@/utils/auth';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './login.module.css';

const LoginButton = () => {
  const { data: session, status } = useSession();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const pathname = usePathname();

  if (status === 'loading') return <p className={styles['loading']}>Cargando...</p>;

  const user = session?.user;

  if (session) {
    return (
      <div className={styles['user-info']}>
        <img className={styles['user-image']} src={user.image} alt='imagen de usuario' onClick={() => setShowUserMenu(!showUserMenu)} />

        {showUserMenu && (
          <div className={styles['user-menu']}>
            <button onClick={signOut}>Cerrar Sesión</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles['login-container']}>
      <FaGithub />
      <button className={styles['login']} onClick={() => login(pathname)}>
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginButton;
