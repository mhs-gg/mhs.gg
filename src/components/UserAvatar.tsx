import { auth } from "@/auth";


export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;
  const imageUrl = session.user.image ?? '';
  
  return <img className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"src={imageUrl} alt="User Avatar" />;
}