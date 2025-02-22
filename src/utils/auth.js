import { signIn } from 'next-auth/react';

const login = async pathname => {
  const result = await signIn('github', {
    callbackUrl: pathname,
    redirect: false
  });
  console.log(result);
};

export { login };
