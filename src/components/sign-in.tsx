'use client'

import { callSignin } from "@/serverAction/authFormsActions";

export default function SignIn() {

  const handleSignIn = async () => await callSignin();

  return (
    <form action={handleSignIn}>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >Sign In</button>
    </form>
  )
}