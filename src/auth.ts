import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from 'bcrypt';
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import user_repository from "./lib/userRepository";
import { signInSchema } from "./lib/zod";
import { findUserByEmail } from "./services/userServices";


interface NextAuthUser {
  id: string;
  name: string;
  password: string;
  email: string;
  image?: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth( (req?) => {
  
  if (req) {
    console.log('This is the request')
    console.log (req)
  }

  return {
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
            const user = await findUserByEmail(email);
            if (!user) return null;
            if (await bcrypt.compare(password, user.password)) {
              const nextAuthUser: NextAuthUser = {
                id: user._id.toString(),
                name: user.name,
                password: user.password,
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
  }
})