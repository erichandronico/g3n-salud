export type NotificationType = "default" | "alert" | "instagram"; // se puede extender

export interface NotificationItem {
  type: NotificationType;
  description: string;
  time: string;
}