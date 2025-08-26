

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { UserAvatar } from "./UserAvatar";
import { UserDropdown } from "./UserDropdown";

interface User {
  name: string;
  email?: string;
  avatarUrl?: string;
}

interface UserMenuProps {
  user: User;
  onLogout: () => void;
  onProfileClick?: () => void;
}

export default function UserMenu({ user, onLogout, onProfileClick }: UserMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md"
      >
        <UserAvatar avatarUrl={user.avatarUrl} name={user.name} />
        <span className="hidden md:inline text-sm font-medium">{user.name}</span>
        <FaChevronDown className="text-xs text-gray-500" />
      </button>
      {open && (
        <UserDropdown
          onLogout={onLogout}
          onProfileClick={onProfileClick}
          close={() => setOpen(false)}
        />
      )}
    </div>
  );
}



