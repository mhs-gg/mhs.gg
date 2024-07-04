import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from 'bcrypt';
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import user_repository from "./lib/userRepository";
import { signInSchema } from "./lib/zod";
import { getUserByEmail } from "./repositories/userRepository";


interface NextAuthUser {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(user_repository),
  callbacks: {
    authorized: async ({auth}) => {
      return !!auth;
    },
  },
  providers: [
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      authorize: async (credentials) => {
        const parsedCredentials = signInSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const {email, password} = parsedCredentials.data;
          const user = await getUserByEmail(email);
          if (!user) return null;
          if (await bcrypt.compare(password, user.password)) {
            const nextAuthUser: NextAuthUser = {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              image: user.image,
            };
            return nextAuthUser;
          }
          console.log('Invalid credentials');
        }
        return null;
      },
    }),
  ],
})