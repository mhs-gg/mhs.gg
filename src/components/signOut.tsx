import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut() // Brings user to signin Page (if method isnt provided then the user will be brought to the default page @ /api/auth/signin)
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}