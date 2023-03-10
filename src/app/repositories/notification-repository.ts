import { Notification } from "../entities/notification/notification";

export abstract class NotificationsRepository { // aqui é apenas o "contrato" não é implementado nada
    abstract create (notification: Notification): Promise<void>;
    abstract findById (notificationId: string): Promise<Notification | null>;
    abstract save(notification: Notification): Promise<void>;
}
