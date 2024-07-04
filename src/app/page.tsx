import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/signOut";
import UserAvatar from "@/components/UserAvatar";


export default async function Home() {

  return (
    <>
      <UserAvatar/>
      <SignIn/>
      <SignOut/>
    </>
  );
}
