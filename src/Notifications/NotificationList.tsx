// components/NotificationList.tsx
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoMdAlert } from "react-icons/io";
import type { IconType } from "react-icons";
import type { NotificationItem, NotificationType } from "./NotificationList.types";

interface Props {
  items: NotificationItem[];
}

const getIconByType = (type: NotificationType): IconType => {
  switch (type) {
    case "alert":
      return IoMdAlert; // se puede reemplazar por el ícono real
    case "instagram":
      return IoNotificationsCircleOutline; // o algún otro ícono representativo
    default:
      return IoNotificationsCircleOutline;
  }
};

const getIconColor = (type: NotificationType): string => {
  switch (type) {
    case "alert":
      return "text-orange-600";
    default:
      return "text-blue-500";
  }
};

export const NotificationList = ({ items }: Props) => {
  return (
    <ul className="text-sm space-y-4">
      {items.map((item, index) => {
        const Icon = getIconByType(item.type);
        return (
          <li key={index} className="flex items-start gap-2">
            <Icon size={28} className={`${getIconColor(item.type)} mt-0.5 flex-shrink-0`} />
            <div className="flex-1">
              <div className="flex justify-between gap-2 mt-1">
                <span className="text-gray-800">{item.description}</span>
                <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
              </div>
              {/* Icono de la derecha, genérico */}
              {/* <div className="mt-1">
                <FaRegImage className="text-gray-400 w-5 h-5" />
              </div> */}
            </div>
          </li>
        );
      })}
    </ul>
  );
};