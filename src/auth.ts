import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import user_repository from "./lib/userRepository";
import { findUserByEmail } from "./services/userServices";
import { hashPassword } from "./utils/utils";


// declare module "next-auth" {
//   interface Session {
//     user: {
//       address: string
//     } & DefaultSession['user']
//   }
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {label: "Email", type: "text", required: true},
        password: {label: "Password", type: "text", required: true},
      },
      authorize: async (credentials: any) => {
        let user = null;

        // Logic to salt and hash password
        const pwHash = await hashPassword(credentials.password);

        // Logic to verify if the user exists
        user = await findUserByEmail(credentials.email);

        if (!user) {
          throw new Error("User not found.")
        }
        return user;
      }
    })
  ],
  adapter: MongoDBAdapter(user_repository)
})