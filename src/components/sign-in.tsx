import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn() // Brings user to signin Page (if method isnt provided then the user will be brought to the default page @ /api/auth/signin)
      }}
    >
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign In</button>
    </form>
  )
}