import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../utils/db';
import { checkPassword } from '../../../utils/password';

type a = {
  email: string;
  password: string;
};

export default NextAuth({
  session: { jwt: true },

  providers: [
    Providers.Credentials({
      async authorize(credentials: a) {
        const client = await connectToDatabase();
        const db = client.db();

        const user = await db
          .collection('clients')
          .findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error('Email is not found');
        }

        const isValid = await checkPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Password does not match');
        }

        client.close();
        return { email: user.email };
      },
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  // SQL or MongoDB database (or leave empty)
  database: process.env.DATABASE_URL,
});
