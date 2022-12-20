import { Notification } from "../entities/notification/notification";
import { NotificationContent } from "../entities/notification/notification-content";
import { NotificationsRepository } from "../repositories/notification-repository";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendoNotificationResponse {
    notification: Notification;
}
// Use case nada mais é que o requisito funcional, a funcionaliodade de envio da notificação em sí
export class SendNotification {
    constructor(
        private notificationRepository: NotificationsRepository) {} 

    async execute(request: SendNotificationRequest): Promise<SendoNotificationResponse> {
        const { recipientId, content, category } = request

        const notification = new Notification({
            recipientId,
            content: new NotificationContent(content),
            category,
        })

        await this.notificationRepository.create(notification)

        return {
            notification,
        }
    }
}