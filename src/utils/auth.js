import { signIn } from 'next-auth/react';

const login = async () => {
  const result = await signIn('github', {
    callbackUrl: '/',
    redirect: false
  });
  console.log(result);
};

export { login };
