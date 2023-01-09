import { Notification } from "../../src/app/entities/notification/notification"
import { NotificationsRepository } from "../../src/app/repositories/notification-repository"


export class inMemoryNotificationsRepository  implements NotificationsRepository {
    findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.")
    }
    save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.")
    }
    public notifications: Notification[]= []

    async create(notification: Notification) {
        this.notifications.push(notification) // é como se fosse o banco de dados, ele da push e vai salvando no array
    }
}