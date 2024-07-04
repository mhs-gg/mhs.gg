import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn() // Brings user to signin Page (if method isnt provided then the user will be brought to the default page @ /api/auth/signin)
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  )
}