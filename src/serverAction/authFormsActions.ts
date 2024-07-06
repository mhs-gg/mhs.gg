'use server'
// Todo
import { signIn, signOut } from "@/auth";


export const callSignin = async () => {
  await signIn();
};

export const callSignout = async () => {
  await signOut();
}