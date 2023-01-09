import { inMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification-repository"
import { Notification } from "../entities/notification/notification";
import { CancelNotification } from "./cancel-notification-use-case";
import { NotificationContent } from "../../app/entities/notification/notification-content"


describe('Cancel Notification',() => {
    test('it should be able to cancel a notification', async () => {
        const notificationRepository = new inMemoryNotificationsRepository;
        const cancelNotification = new CancelNotification(notificationRepository);

        const notification = new Notification({
            category: 'social',
            content: new NotificationContent('Nova solicitação de amizade'),
            recipientId: 'teste',
        })    
    })  
})