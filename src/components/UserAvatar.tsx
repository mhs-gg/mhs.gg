import { auth } from "@/auth";


export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;
  const imageUrl = session.user.image ?? '';
  
  return <img src={imageUrl} alt="User Avatar" />;
}