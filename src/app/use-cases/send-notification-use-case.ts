import { Notification } from "../entities/notification/notification";
import { NotificationContent } from "../entities/notification/notification-content";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendoNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<SendoNotificationResponse> {
        const { recipientId, content, category } = request

        const notification = new Notification({
            recipientId,
            content: new NotificationContent(content),
            category,
        })

        return {
            notification,
        }
    }
}