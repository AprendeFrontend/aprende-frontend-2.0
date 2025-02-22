'use client';
import { login } from '@/utils/auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Button from '../button/Button';

const DynamicButton = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {status === 'loading' && <span className='loading'>Cargando...</span>}
      {!session && status !== 'loading' && (
        <Button className='button-primary' onClick={login}>
          Accede Ahora
        </Button>
      )}
      {session && status !== 'loading' && (
        <>
          <Link href='/challenges/html-css' className='link-primary'>
            Ver Desafíos De HTML + CSS
          </Link>
          <Link href='/challenges/javascript' className='link-primary'>
            Ver Desafíos De JavaScript
          </Link>
        </>
      )}
    </>
  );
};

export default DynamicButton;
