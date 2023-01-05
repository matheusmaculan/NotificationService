import { Notification } from "../../src/app/entities/notification/notification"
import { NotificationsRepository } from "../../src/app/repositories/notification-repository"


export class inMemoryNotificationsRepository  implements NotificationsRepository {
    public notifications: Notification[]= []

    async create(notification: Notification) {
        this.notifications.push(notification) // é como se fosse o banco de dados, ele da push e vai salvando no array
    }
}