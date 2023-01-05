import { Notification } from "src/app/entities/notification/notification";

export class NotificationViewModel { // é parecido com o mapper, mas aqui eu seleciono como será retornado a estrutura para o front
    static toHTTP(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,  
            recipientId: notification.recipientId,
        }
    }
}