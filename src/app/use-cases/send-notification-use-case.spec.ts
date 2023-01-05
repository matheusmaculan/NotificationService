import { inMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification-repository"
import { SendNotification } from "./send-notification-use-case"


describe('Sendo Notification',() => {
    test('it should be able to send  a notification', async () => {
        const notificationRepository = new inMemoryNotificationsRepository
        const sendNotification = new SendNotification(notificationRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        })

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toEqual(notification);
    })  
})