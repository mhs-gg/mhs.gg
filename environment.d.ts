/**
 * added to strictly type environment variables which were: <string | undefined>
 */

import "next";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // todo
      // Next Auth
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;

      // Google auth
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      // MongoDB
      MONGO_USER_URI: string;
    }
  }
}