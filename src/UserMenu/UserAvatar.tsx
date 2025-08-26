import { FaUserCircle } from "react-icons/fa";

export function UserAvatar({ avatarUrl, name }: { avatarUrl?: string; name: string }) {
  return avatarUrl ? (
    <img
      src={avatarUrl}
      alt={name}
      className="w-8 h-8 rounded-full object-cover"
    />
  ) : (
    <FaUserCircle className="w-8 h-8 text-gray-500" />
  );
}