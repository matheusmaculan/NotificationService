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
export class SendNotification {
    constructor(
        private notificationRepository: NotificationsRepository) {} // Quando for instanciar uma nova notificação irei receber o repositorio

    async execute(request: SendNotificationRequest): Promise<SendoNotificationResponse> { // irei receber o conteudo, id e categoria e prometo retornar uma notificação
        const { recipientId, content, category } = request

        const notification = new Notification({
            recipientId,
            content: new NotificationContent(content),
            category,
        })

        await this.notificationRepository.create(notification) // Aqui vou passar a notificação para o repositorio criar ela

        return {
            notification,
        }
    }
}