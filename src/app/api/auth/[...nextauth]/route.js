import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ''
    })
  ],
  pages: {
    signIn: '/'
  }
});

// Next.js requiere exportar `GET` y `POST` para API routes
export { handler as GET, handler as POST };
