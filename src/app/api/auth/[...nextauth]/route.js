import bcrypt from 'bcryptjs';

import  connect  from '@/utils/database';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/model/User';
import  useRouter  from 'next/navigation';

const handler = NextAuth({
 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPassword) {
              return user;
              
           
            } else {
              throw new Error('Incorrect password');
            }
          } else {
            throw new Error('User not found');
          }
        } catch (err) {
          throw new Error(err);
        }
      }
    })
  ],
  pages: {
    error: '/Dashboard/login'

  }
});

export { handler as GET, handler as POST };
