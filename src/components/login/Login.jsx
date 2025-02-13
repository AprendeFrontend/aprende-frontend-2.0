'use client';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  return <button onClick={login}>Iniciar Sesión</button>;
};

const login = async () => {
  const result = await signIn('github', {
    callbackUrl: '/',
    redirect: false
  });
  console.log(result);
};

export default LoginButton;
