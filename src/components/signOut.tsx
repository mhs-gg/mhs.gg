"use client"
import { callSignout } from "@/serverAction/authFormsActions";


export default function SignOut() {
  const handleSignOut = async () => await callSignout();
  return (
    <form action={handleSignOut}>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >Sign Out</button>
    </form>
  )
}