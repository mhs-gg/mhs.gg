import { hash } from "argon2";

/**
 * 
 * @param password 
 * @returns hashed password
 * For more information head to:
 * @link https://www.npmjs.com/package/argon2
 */
export const hashPassword = async (password: string) => {
  return await hash(password);
};