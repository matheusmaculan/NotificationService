import { Notification } from "../../src/app/entities/notification/notification"
import { NotificationsRepository } from "../../src/app/repositories/notification-repository"


export class inMemoryNotificationsRepository  implements NotificationsRepository {
    public notifications: Notification[]= []

    async create(notification: Notification) {
        this.notifications.push(notification)
    }
}