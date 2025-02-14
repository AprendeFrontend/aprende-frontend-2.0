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
        <Link href='/challenge' className='link-primary'>
          Ver Desafíos
        </Link>
      )}
    </>
  );
};

export default DynamicButton;
