import { FaSignOutAlt, FaUser } from "react-icons/fa";

export function UserDropdown({
  onLogout,
  onProfileClick,
  close,
}: {
  onLogout: () => void;
  onProfileClick?: () => void;
  close: () => void;
}) {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
      <button
        onClick={() => {
          onProfileClick?.();
          close();
        }}
        className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
      >
        <FaUser className="mr-2" />
        Perfil
      </button>
      <button
        onClick={() => {
          onLogout();
          close();
        }}
        className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
      >
        <FaSignOutAlt className="mr-2" />
        Cerrar sesión
      </button>
    </div>
  );
}